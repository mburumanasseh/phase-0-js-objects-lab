
// Step 1: Create Attendee Object
const attendee = {
  attendeeId: "T001",
  name: "Alice Smith",
  event: "JavaScript Conference",
  ticketType: "VIP",
  ticketPrice: 150.00
};

// Step 2: Log Attendee Name
function logAttendeeName(attendee) {
  console.log(attendee.name);
}

// Step 3: Log Ticket Price
function logTicketPrice(attendee) {
  console.log(attendee.ticketPrice);
}

// Step 4: Update Ticket Type
function updateTicketType(attendee, newTicketType) {
  attendee.ticketType = newTicketType;
}

// Step 5: Update Ticket Price
function updateTicketPrice(attendee, newTicketPrice) {
  attendee.ticketPrice = newTicketPrice;
}

// Step 6: Remove Event Property
function removeEventProperty(attendee) {
  delete attendee.event;
}

// Step 7: Add Checked-in Property
function addCheckedInProperty(attendee) {
  attendee.checkedIn = true;
}




//Needed for the tests to work. Don't modify
module.exports = {
  ...(typeof attendee !== 'undefined' && { attendee }),
  ...(typeof logAttendeeName !== 'undefined' && { logAttendeeName }),
  ...(typeof logTicketPrice !== 'undefined' && { logTicketPrice }),
  ...(typeof updateTicketType !== 'undefined' && { updateTicketType }),
  ...(typeof updateTicketPrice !== 'undefined' && { updateTicketPrice }),
  ...(typeof removeEventProperty !== 'undefined' && { removeEventProperty }),
  ...(typeof addCheckedInProperty !== 'undefined' && { addCheckedInProperty })
};