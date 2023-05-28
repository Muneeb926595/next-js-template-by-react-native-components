export const calculateSoldOutCount = (total_ticket_limitation, remaining_tickets) => {
    return total_ticket_limitation - remaining_tickets
}