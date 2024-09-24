// controller.js
const baseUrl = `http://localhost:3333`;
const url = baseUrl + '/employee';

const init = () => {
    getAllData();
}


const getAllData = async () => {
    try {
        const res = await fetch(baseUrl);
        console.log(res.data);
        const data = await res.json();
        showEmployee(data);
    }
    catch (error) {
        console.log(error);
    }
}

const deleteEmployee = async (idx) => {
    try {
        const deleteUrl = url + '/' + idx;
        const res = await fetch(deleteUrl, { method: 'DELETE' });
        const data = await res.json();
        console.log(data);
        getAllData();
    } catch (error) {
        console.log(error);
    }
}

const showEmployee = (data) => {
    const result = document.querySelector('#list-area');
    result.innerHTML = '';
    data.forEach(employee => {
        result.innerHTML += `
            <tr>
                <th><input type="checkbox" id="eCheck" name="eCheck"></th>
                <th>${employee.idx}</th>
                <th>${employee.name}</th>
                <th>${employee.dept}</th>
                <th>${employee.rnk}</th>
                <th>${employee.email}</th>
                <th>null</th>
                <th><button onclick="getEmployee">수정</button></th>
                <th><button onclick="deleteEmployee">삭제</button></th>
            </tr>
        `;
    });
}

document.addEventListener('DOMContentLoaded', init);