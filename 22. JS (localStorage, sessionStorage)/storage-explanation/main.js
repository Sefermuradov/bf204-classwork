const getBtn = document.querySelector('#get');
const setBtn = document.querySelector('#set');
const removeBtn = document.querySelector('#remove');
const clearBtn = document.querySelector('#clear');

// setBtn.addEventListener('click',(e)=>{
//     localStorage.setItem('number',21);
//     localStorage.setItem('test','hello');
// });
// getBtn.addEventListener('click',(e)=>{
//     const num = localStorage.getItem('number');
//     console.log('from local storage: ',num);
//     console.log('test local storage: ',localStorage.getItem('test'));
// });
// removeBtn.addEventListener('click',(e)=>{
//     const res = localStorage.removeItem('test');
//     console.log('result: ',res);
// });
// clearBtn.addEventListener('click',(e)=>{
//     localStorage.clear();
// });

const form = document.querySelector('form');
const inp = document.querySelector('input');

// inp.addEventListener('keyup',(e)=>{
//     localStorage.setItem('fullName',e.target.value);
// });

window.addEventListener('load',()=>{
    // inp.value = localStorage.getItem('fullName');
    if (!localStorage.getItem('users')) {
        localStorage.setItem('users',JSON.stringify([]));
    }
})

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    //JSON
    //SET - stringify
    //GET - parse
    const user = {id:new Date().getMilliseconds(),fullName: inp.value};
    const localUsers = JSON.parse(localStorage.getItem('users'));
    localUsers.push(user);
    localStorage.setItem('users',JSON.stringify(localUsers));
    inp.value = '';
});
// const getUsers = document.querySelector('#get-users');
// getUsers.addEventListener('click',(e)=>{
//     console.log()
// })