
<?php echo
"<main>
    <div class='page-wrapper' id='divmain'>
       <h1>Feedback Form</h1>
        <form  id='feedForm' method='post'>
            <p>
                <label for='fname'>Fisrt Name</label>
                <input type='text' name='fname' id='fname' class='formcontrols'><span id='fnameErr'></span>

            </p>

            <p>
                <label for='lname'>Last Name</label>
                <input type='text' name='lname' id='lname' class='formcontrols'><span id='lnameErr'></span>

            </p>
            <p>
                <label for='email'>Your Email</label>
                <input type='text' name='email' id='email' class='formcontrols'><span id='emailErr'></span>

            </p>
            <p>
                <label for='phone'>Phone Number</label>
                <input type='text' name='phone' id='phone' class='formcontrols'><span id='phoneErr'></span>

            </p>

            <p><label id='lblgen'>Gender</label>
                <p class='ingen'>
                <label for='male'>Male</label>
                <input type='radio' name='gender' id='male'  >
                </p>

                <p class='ingen'>
                <label for='female'>Female</label>
                <input type='radio' name='gender' id='female'><span id='genderErr'></span>
                </p>

            </p>
            <p>
                <label for='comments'>Comments</label>
                <textarea class='formcontrols' rows='6'></textarea>

            </p>

            <p>

                <label for='agree'> </label><input type='checkbox' name='agree' id='agree' >Do you want to send this</input><span id='cnfrmErr'></span>



            </p>
            <p> <input type='submit' name='send'></p>
            

        </form>
        <div id='confirm'>
            <p>Thank you!!<span id='disfname'></span></p>
            <p>Your message has been sent!</p>
            </div>


    </div>
</main>
</div>
";

