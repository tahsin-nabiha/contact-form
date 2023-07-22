const form =  document.querySelector(".form");
const input =  document.querySelectorAll( ".form input");
const msg =  document.querySelector(".msg");

const file1 =  document.getElementById( "file1");
const s_file =  document.querySelector( ".single-img");
const close_btn =  document.querySelector( ".close");

const file2 =  document.getElementById( "file2");
const m_file =  document.querySelector( ".multiple-file");

const reset_btn =  document.querySelector( ".reset");




/**
 * Form Submit
 */

form.onsubmit = (e) => {

    e.preventDefault();

    let formData = new FormData(e.target);

    formData = Object.fromEntries(formData);

    // Form Validation

    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
        msg.innerHTML = creatAlert('All filds are required');
    } 
    else{
        msg.innerHTML = creatAlert('Successful' , 'success');
        
        // For input value empty after form submit
        input.forEach(item => {
            item.value = '';
        });
    }
}


/**
 * If click reset button then remove all img
 */

reset_btn.onclick = (e) => {
    s_file.style.display = 'none';
    close_btn.style.display = 'none';
}


/**
 * Single File preview img
 */


file1.onchange = (e) => {

    const photoUrl = URL.createObjectURL(e.target.files[0]);
    s_file.innerHTML = `
        <img src="${photoUrl}" alt="">
    `
    s_file.style.display = 'block';
    close_btn.style.display = 'block';
};


/**
 * Remove Single Preview img 
 */

close_btn.onclick = (e) => {

    file1.value = '';
    s_file.style.display = 'none';
    close_btn.style.display = 'none';
}



/**
 * File preview Multiple
 */

let selectedFiles = [];

file2.onchange = (e) => {

    let img =''
    selectedFiles = e.target.files;

    for (let i = 0; i < selectedFiles.length; i++) {

        // Create URL for preview photo
        const photoUrl = URL.createObjectURL(selectedFiles[i]);


        // Create div
        const div_img = document.createElement('div');
        div_img.classList.add('col-md-4', 'img-div');

        // Create img 
        const g_img = document.createElement('img');
        g_img.setAttribute('src' , photoUrl);

        // Creat Close Button
        const closebtn2 = document.createElement('button');
        closebtn2.classList.add('closebtn2');
        closebtn2.setAttribute('type' , 'button');

        const close_icon = document.createElement('i');
        close_icon.classList.add("fa-solid", "fa-x");

        closebtn2.appendChild(close_icon);


        // Append All child
        div_img.appendChild(g_img);
        div_img.appendChild(closebtn2);


        // Show all imge
        img += div_img; 
        m_file.appendChild(div_img);
        div_img.style.display = 'block';

        
        //Remove Multiple File Preview img
        closebtn2.onclick = ((e) => {
            file2.value = '';
            m_file.removeChild(div_img);
        })
    }

};






