document.addEventListener('DOMContentLoaded', () => {
    const playButton = document.querySelector('.play-button');
    const versionSelect = document.querySelector('#version-select');

    playButton.addEventListener('click', () => {
        const selectedVersion = versionSelect.value;
        
        if (selectedVersion) {
            // Open the selected Minecraft version
            window.location.href = selectedVersion;
        } else {
            alert('Please select a Minecraft version');
        }
    });
});