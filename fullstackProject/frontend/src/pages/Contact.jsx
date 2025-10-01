export function Contact() {

    function handleSubmit() {
        // call API function
    }

    return (
        <>
            <h1>Contact Us</h1>
            <p>Have question or feedback? Feel free to reach out to us!</p>
            <p>You can contact us via email at <a href="mailto:contact@gmail.com">contact@gmail.com</a>.</p>
            <p>Alternatively, you can fill out the form below:</p>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text" name="name" />
                <label>Email:</label>
                <input type="email" name="email" />
                <label>Message:</label>
                <textarea name="message" />
                <button type="submit">Send</button>
            </form>
        </>
    )
}