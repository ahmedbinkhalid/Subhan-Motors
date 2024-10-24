export const citiesOfPakistan = [
    'Abbottabad', 'Ahmedpur East', 'Arifwala', 'Attock', 'Bahawalnagar', 'Bahawalpur', 'Bannu', 'Burewala', 
    'Chakwal', 'Charsadda', 'Chiniot', 'Chishtian', 'Dadu', 'Dera Ghazi Khan', 'Dera Ismail Khan', 'Faisalabad', 
    'Ghotki', 'Gojra', 'Gujranwala', 'Gujrat', 'Hafizabad', 'Haripur', 'Hyderabad', 'Islamabad', 'Jacobabad', 
    'Jaranwala', 'Jhang', 'Jhelum', 'Kamoke', 'Kasur', 'Khairpur', 'Khanewal', 'Khanpur', 'Khushab', 'Kot Addu', 
    'Kotri', 'Kohat', 'Lahore', 'Larkana', 'Layyah', 'Lodhran', 'Mandi Bahauddin', 'Mardan', 'Mianwali', 
    'Mirpur Khas', 'Multan', 'Muzaffargarh', 'Nankana Sahib', 'Nawabshah', 'Okara', 'Pakpattan', 'Peshawar', 
    'Quetta', 'Rahim Yar Khan', 'Rawalpindi', 'Sadiqabad', 'Sahiwal', 'Samundri', 'Sargodha', 'Shahdadkot', 
    'Sheikhupura', 'Shikarpur', 'Sialkot', 'Sukkur', 'Swat', 'Tando Adam', 'Tando Allahyar', 'Toba Tek Singh', 
    'Vehari', 'Wah Cantonment'
  ];

  const currentYear = new Date().getFullYear().toString(); // Get the current year as a string
  const years = []; // Initialize an empty array
  
  for (let year = 1900; year <= parseInt(currentYear); year++) {
      years.push(year.toString()); 
  }
  
  export const yearsFrom1900ToCurrent = years; // Export the array