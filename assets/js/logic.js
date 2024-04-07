// Google Fonts, Bootstrap CSS, site-wide CSS
document.head.append(`<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&family=Dancing+Script:wght@400..700&family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet">
<!-- bootstrap -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
<!-- site css -->
<link rel="stylesheet" href="./assets/css/styles.css">`)

/* bootstrap script */
let bootstrapScript = document.createElement('script')
bootstrapScript = `<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>`


let navEl = document.createElement('nav');
navEl = `<nav class="navbar bg-body-tertiary">
    <div class="container-fluid">
        <img class="navbar-brand" src="./assets/in the market logo.png" alt="blog logo" height=150px>
        <form class="d-flex">
            <button class="btn btn-outline-secondary" type="button">Write</button>
            <button class="btn btn-outline-secondary" type="button">Read</button>
        </form>
    </div>
</nav>`

document.body.prepend(navEl)
