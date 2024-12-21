export function formatDate(date = new Date(), format = 'YYYY-MM-DD') {

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    return format
        .replace('YYYY', year)
        .replace('MM', month)
        .replace('DD', day);
}


export function formatTime(date = new Date(), format = 'HH:MM:SS') {
    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';

   
    if (format.includes('hh') || format.includes('hh:mm A')) {
        hours = hours % 12 || 12;
    }

    hours = String(hours).padStart(2, '0');

    return format
        .replace('HH', hours)  
        .replace('hh', hours)  
        .replace('MM', minutes)
        .replace('SS', seconds)
        .replace('A', ampm);  
}

