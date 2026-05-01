    const dropdownElementList = document.querySelectorAll('.dropdown-toggle')
    const dropdownmenu=document.querySelector('.dropdown-menu')



    const dropdownList = [...dropdownElementList].map(dropdownToggleEl => 
    new bootstrap.Dropdown(dropdownToggleEl))

