function showMessage() {
    const messageDiv = document.getElementById('message');
    const messages = [
        '🚀 Hello from AI!',
        '✨ Code synced successfully!',
        '🎉 GitHub integration works!',
        '💡 Modern web app ready!'
    ];
    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    messageDiv.innerHTML = randomMessage;
    
    console.log('AI Generated Code Executed!');
}