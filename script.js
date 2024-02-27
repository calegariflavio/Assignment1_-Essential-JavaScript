/*HOME PAGE*/
$(document).ready(function () {
    var imageName = $('#profile-pic').attr('alt');

    // Hide an element to display the name
    $('#name').hide();

    setTimeout(function () {
        $('#name').text(imageName).fadeIn();
    }, 10000); // 10000 milliseconds = 10 seconds
});


/*MARKS*/

// Regex to only accept non-negative, integers and less or equal 100
const markRegex = /^[0-9]{1,3}$/;

$(document).ready(function () {
    $('#calculate-grade').click(function () {
        MarkToGrade();
    });
});

function validateMark(mark) {
    if (!markRegex.test(mark)) {
        throw "Error: Mark must be a non-negative, integer, less than or equal to 100.";
    }
    return true;
}


function MarkToGrade() {
    var markStr = $('#mark-input').val();
    $('#result').text(''); // Clear previous messages
    $('#validation-message').text(''); // Clear previous messages

    try {
        var mark = parseInt(markStr, 10);

        try {
            const markStr = $('#mark-input').val();

            if (validateMark(markStr)) {
                const mark = parseInt(markStr, 10); // Proceed since the mark is valid

                var grade;
                if (mark >= 90) {
                    grade = 'A';
                } else if (mark >= 80) {
                    grade = 'B';
                } else if (mark >= 70) {
                    grade = 'C';
                } else if (mark >= 50) {
                    grade = 'D';
                } else {
                    grade = 'F';
                }

                $('#result').text("Your grade is: " + grade);

                // Add the style based on grade
                if (grade === 'A' || grade === 'B' || grade === 'C') {
                    $('#result').css('color', 'green');
                } else {
                    $('#result').css('color', 'red');
                }

            }
        } catch (err) {
            $('#validation-message').text(err); // Display the error message
        }

    } catch (err) {
        $('#validation-message').text("Error: " + err);
    }
}

/*STAFF*/

var dataSet = [
    ["Brielle Williamson", "Integration Specialist", "New York", "4804", "2012/12/02", "$372,000"],
    ["Herrod Chandler", "Sales Assistant", "San Francisco", "9608", "2012/08/06", "$137,500"],
    ["Rhona Davidson", "Integration Specialist", "Tokyo", "6200", "2010/10/14", "$327,900"],
    ["Colleen Hurst", "Javascript Developer", "San Francisco", "2360", "2009/09/15", "$205,500"],
    ["Sonya Frost", "Software Engineer", "Edinburgh", "1667", "2008/12/13", "$103,600"],
    ["Jena Gaines", "Office Manager", "London", "3814", "2008/12/19", "$90,560"],
    ["Quinn Flynn", "Support Lead", "Edinburgh", "9497", "2013/03/03", "$342,000"],
    ["Tiger Nixon", "System Architect", "Edinburgh", "5421", "2011/04/25", "$320,800"],
    ["Garrett Winters", "Accountant", "Tokyo", "8422", "2011/07/25", "$170,750"],
    ["Ashton Cox", "Junior Technical Author", "San Francisco", "1562", "2009/01/12", "$86,000"],
    ["Cedric Kelly", "Senior Javascript Developer", "Edinburgh", "6224", "2012/03/29", "$433,060"],
    ["Airi Satou", "Accountant", "Tokyo", "5407", "2008/11/28", "$162,700"],
    ["Charde Marshall", "Regional Director", "San Francisco", "6741", "2008/10/16", "$470,600"],
    ["Haley Kennedy", "Senior Marketing Designer", "London", "3597", "2012/12/18", "$313,500"],
    ["Tatyana Fitzpatrick", "Regional Director", "London", "1965", "2010/03/17", "$385,750"],
    ["Michael Silva", "Marketing Designer", "London", "1581", "2012/11/27", "$198,500"],
    ["Paul Byrd", "Chief Financial Officer (CFO)", "New York", "3059", "2010/06/09", "$725,000"],
    ["Gloria Little", "Systems Administrator", "New York", "1721", "2009/04/10", "$237,500"],
    ["Bradley Greer", "Software Engineer", "London", "2558", "2012/10/13", "$132,000"],
    ["Dai Rios", "Personnel Lead", "Edinburgh", "2290", "2012/09/26", "$217,500"],
    ["Jenette Caldwell", "Development Lead", "New York", "1937", "2011/09/03", "$345,000"],
    ["Yuri Berry", "Chief Marketing Officer (CMO)", "New York", "6154", "2009/06/25", "$675,000"],
    ["Caesar Vance", "Pre-Sales Support", "New York", "8330", "2011/12/12", "$106,450"],
    ["Doris Wilder", "Sales Assistant", "Sidney", "3023", "2010/09/20", "$85,600"],
    ["Angelica Ramos", "Chief Executive Officer (CEO)", "London", "5797", "2009/10/09", "$1,200,000"],
    ["Gavin Joyce", "Developer", "Edinburgh", "8822", "2010/12/22", "$92,575"],
    ["Jennifer Chang", "Regional Director", "Singapore", "9239", "2010/11/14", "$357,650"],
    ["Brenden Wagner", "Software Engineer", "San Francisco", "1314", "2011/06/07", "$206,850"],
    ["Fiona Green", "Chief Operating Officer (COO)", "San Francisco", "2947", "2010/03/11", "$850,000"],
    ["Shou Itou", "Regional Marketing", "Tokyo", "8899", "2011/08/14", "$163,000"],
    ["Michelle House", "Integration Specialist", "Sidney", "2769", "2011/06/02", "$95,400"],
    ["Suki Burks", "Developer", "London", "6832", "2009/10/22", "$114,500"],
    ["Prescott Bartlett", "Technical Author", "London", "3606", "2011/05/07", "$145,000"],
    ["Gavin Cortez", "Team Leader", "San Francisco", "2860", "2008/10/26", "$235,500"],
    ["Martena Mccray", "Post-Sales support", "Edinburgh", "8240", "2011/03/09", "$324,050"],
    ["Unity Butler", "Marketing Designer", "San Francisco", "5384", "2009/12/09", "$85,675"]
];

// Mapping the staff data
const staffData = dataSet.map(staffMember => ({
    name: staffMember[0],
    position: staffMember[1],
    office: staffMember[2],
    id: staffMember[3],
    startDate: staffMember[4],
    salary: staffMember[5]
}));

$(document).ready(function () {

    displayStaffList(staffData); // Initial display

    // Sort function with salary
    function sortStaff(sortBy, sortOrder) {
        staffData.sort((a, b) => {
            let valueA, valueB; // For comparison

            if (sortBy === 'name') {
                valueA = a.name.toLowerCase();
                valueB = b.name.toLowerCase();
            } else { // Sort by salary
                valueA = parseInt(a.salary.replace(/[^0-9]/g, ''));
                valueB = parseInt(b.salary.replace(/[^0-9]/g, ''));
            }

            return sortOrder === 'asc' ?
                valueA < valueB ? -1 : valueA > valueB ? 1 : 0 :
                valueA > valueB ? -1 : valueA < valueB ? 1 : 0;
        });
        displayStaffList(staffData);
    }

    // Display Function
    function displayStaffList(staffArray) {
        $('#staff-table tbody').empty();
        staffArray.forEach(staff => {
            $('#staff-table tbody').append(`
                <tr>
                    <td>${staff.name}</td>
                    <td>${staff.position}</td> 
                    <td>${staff.office}</td>
                    <td>${staff.id}</td> 
                    <td>${staff.startDate}</td>
                    <td>${staff.salary}</td> 
                </tr>
            `);
        });
    }

    // Click event on headers (name and salary)
    $('.sortable').click(function () {
        const sortBy = $(this).data('sort-type');
        let sortOrder = $(this).data('sort-order') || 'asc'; // Initial sort order

        // Toggle sort order (asc/desc)
        sortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
        $(this).data('sort-order', sortOrder);

        // Trigger the sorting
        sortStaff(sortBy, sortOrder);
    });
});

/*WEATHER*/

const temperatureRegex = /^-?\d+(?:\.\d+)?$/; 

$(document).ready(function () {
    // Conversion functions
    function fahrenheitToCelsius(fahrenheit) {
        return (fahrenheit - 32) * (5 / 9);
    }

    function celsiusToKelvin(celsius) {
        return celsius + 273.15;
    }

    // Functions for button clicks
    $('#to-celsius').click(function () {
        const fahrenheit = $('#temp-input').val(); // Get input as string
        if (!temperatureRegex.test(fahrenheit)) {
            $('#conversion-result').text("Please enter a valid temperature.");
        } else {
            const celsius = fahrenheitToCelsius(fahrenheit).toFixed(2);
            $('#conversion-result').text(`${fahrenheit}°F is equal to ${celsius}°C`);
        }
    });

    $('#to-kelvin').click(function () {
        const fahrenheit = $('#temp-input').val(); // Get input as string
        if (!temperatureRegex.test(fahrenheit)) {
            $('#conversion-result').text("Please enter a valid temperature.");
        } else {
            const celsius = fahrenheitToCelsius(fahrenheit);
            const kelvin = celsiusToKelvin(celsius).toFixed(2);
            $('#conversion-result').text(`${fahrenheit}°F is equal to ${kelvin}K`);
        }
    });
});





