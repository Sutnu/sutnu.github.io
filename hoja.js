// script.js
document.addEventListener("DOMContentLoaded", function() {
    const pages = document.querySelectorAll('.page');
    const pageHeight = pages[0].offsetHeight;
  
    pages.forEach((page, index) => {
      const content = page.innerHTML;
      const contentHeight = page.scrollHeight;
      
      if (contentHeight > pageHeight) {
        let remainingContent = content;
        
        while (remainingContent.length > 0) {
          let splitPoint = Math.floor(pageHeight / contentHeight * remainingContent.length);
          let firstPart = remainingContent.substring(0, splitPoint);
          let secondPart = remainingContent.substring(splitPoint);
  
          // Update current page with first part
          page.innerHTML = firstPart;
          
          // Create a new page with the second part
          const newPage = document.createElement('div');
          newPage.className = 'page';
          newPage.innerHTML = secondPart;
          document.body.appendChild(newPage);
          
          // Update remaining content and move to the new page
          remainingContent = secondPart;
          contentHeight = newPage.scrollHeight;
        }
      }
    });
  });