<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Suicideboys - Unique and Dark Sound</title>
    <link rel="stylesheet" href="css/style2.css">
    <link rel="stylesheet" href="CSS/contacts.css">
</head>
<body>
<?php include("header.php") ?>
    <br>
<br>
<br>
<br>
<br>

    <section class="main-content">

      <div class="contact-info">
        <h2>Management Contacts</h2>
        <p>Email: management@suicideboys.com</p>
        <p>Phone: +1 123-456-7890</p>
    </div>

        <div class="contact-form">
            <h2>Send Us a Message</h2>
            <form action="submit_form.php" method="post">
                <label for="name">Your Name:</label>
                <input type="text" id="name" name="name" required>

                <label for="email">Your Email:</label>
                <input type="email" id="email" name="email" required>

                <label for="message">Your Message:</label>
                <textarea id="message" name="message" rows="4" required></textarea>

                <button type="submit">Send Message</button>
            </form>
        </div>
    </section>

    <?php include("footer.php") ?>
      
    <script src="script.js"></script>
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
</body>
</html>
