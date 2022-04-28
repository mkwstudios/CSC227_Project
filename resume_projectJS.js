
document.addEventListener("submit", function(event) {
    event.preventDefault();

    let form = document.forms[0];
    let values = {
        name: form["Name"].value,
        pronouns: form["Pronouns"].value,
        phone: form["Phone"].value,
        website: form["Website"].value,
        email: form["Email"].value,
        address: form["Address"].value,
        high1: form["High1"].value,
        high2: form["High2"].value,
        high3: form["High3"].value,
        degree: form["Degree"].value,
        courses: form["Courses"].value,
        startDate: form["startDate"].value,
        endDate: form["endDate"].value,
        startDate2: form["startDate2"].value,
        endDate2: form["endDate2"].value,
        startDate3: form["startDate3"].value,
        endDate3: form["endDate3"].value,
        Exp1: form["Exp1"].value,
        Exp2: form["Exp2"].value,
        Exp3: form["Exp3"].value,
        ref1: form["ref1"].value,
        ref2: form["ref2"].value
        
    };

    let newWindow = window.open("about:blank");
    let html = "<html><head><title>Output</title>" +
        "<link rel='stylesheet' type='text/css' href='projectCSS.css'>" + 
        "<link href='https://fonts.googleapis.com/css?family=Belgrano' rel='stylesheet'>"+
        "</head><body>" +
        "<header><h1>Build Your Resume</h1></header>" +
        "<div class = 'container'><p><h2>Heading</h2></p>" + 
        "<p>Name: " + values.name + "</p>" +
        "<p>Pronouns: " + values.pronouns + "</p>" +
        "<p>Phone: " + values.phone + "</p>" +
        "<p>Website: " + values.website + "</p>" +
        "<p>Email: " + values.email + "</p>" +
        "<p>Address: " + values.address + "</p></div>" +

        "<p><h2>Skill Highlights</h2></p>" + 
        "<p>" + values.high1 + " - " + values.high2 + " - " + values.high3 + "</p>" + 

        "<p><h2>Educational Background</h2></p>" + 
        "<p> Highest degree earned:" + values.degree + "</p>" +
        "<p> Relevant areas of study:" + values.courses + "</p>" +

        "<p><h2>Employment History</h2></p>" +
        "<p> Start date: " + values.startDate + "   To end date: " + values.endDate + "</p>" +
        "<p> Experience:  " + values.Exp1 + "</p>" + 
        "<p> Start date: " + values.startDate2 + "   To end date: " + values.endDate2 + "</p>" +
        "<p> Experience:  " + values.Exp2 + "</p>" + 
        "<p> Start date: " + values.startDate3 + "   To end date: " + values.endDate3 + "</p>" +
        "<p> Experience:  " + values.Exp3 + "</p>" + 
        "<p> Reference Contact Info: " + values.ref1 + "  " + values.ref2 + "</p></div>" + 
        "</body></html>";

    newWindow.document.write(html);

});