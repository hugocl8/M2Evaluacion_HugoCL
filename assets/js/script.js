    document.querySelectorAll('.skill-icon').forEach(function(icon) {
        icon.addEventListener('mouseover', function() {
            icon.style.transform = 'rotate(360deg)';
        });
        icon.addEventListener('mouseout', function() {
            icon.style.transform = 'rotate(0deg)';
        });
    });
