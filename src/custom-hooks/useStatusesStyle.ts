export function useStatusesStyle (status: string) {
    let trimString = status.replace(/_/g, ' ');
    let upperCase =
        trimString[0].toUpperCase() + trimString.slice(1).toLowerCase();
    let color = '';
    switch (upperCase) {
        case 'Pending':
            color = 'messenger';
            break;
        case 'Approved':
            color = 'whatsapp';
            break;
        case 'Ready for review':
            color = 'yellow';
            break;
        case 'In progress':
            color = 'orange';
            break;
        case 'Rejected':
            color = 'red';
            break;
        default:
            color = 'blue';
    }

    return { data: upperCase, color };
};