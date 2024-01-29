document.addEventListener('DOMContentLoaded', function () {
    // Get the join server button and server IP elements
    const joinServerButton = document.getElementById('joinServerButton');
    const serverIP = document.getElementById('serverIP');

    // Add click event listener to the button
    joinServerButton.addEventListener('click', function () {
        // Copy the server IP to the clipboard
        copyToClipboard(serverIP.textContent);
        
        // Provide visual feedback (you can customize this)
        joinServerButton.textContent = 'IP Copied!';
        setTimeout(() => {
            joinServerButton.textContent = 'Join the Server';
        }, 2000); // Reset after 2 seconds
    });

    // Function to copy text to the clipboard
    function copyToClipboard(text) {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
    }
});
