const { Client } = require("../dist");
const client = new Client("token");

client.on("ready", bot => {
    console.log(`Logged in as ${bot.profile.username}`);

    // client.getAnnouncements().then(announcements => {
    //     console.log(announcements);
    // }).catch(err => {
    //     console.log(err);
    // });

    // client.getVoters().then(voters => {
    //     console.log(voters);
    // }).catch(err => {
    //     console.log("Voters");
    //     console.log(err);
    // });

    // client.checkVote("779641401482805289").then(vote => {
    //     console.log(vote);
    // }).catch(err => {
    //     console.log("Couldn't find vote")
    //     console.log(err);
    // });

    // client.addAnnouncement({
    //     title: "Test Announcement",
    //     description: "This is a test announcement",
    // }).then(announcement => {
    //     console.log(announcement);
    // }).catch(err => {
    //     console.log("Couldn't add announcement");
    //     console.log(err);
    // });

    // client.deleteAnnouncement("779641401482805289").then(message => {
    //     console.log(message);
    // }).catch(err => {
    //     console.log("Couldn't delete announcement");
    //     console.log(err);
    // });

    // client.addCommand({
    //     name: "test",
    //     description: "This is a test command",
    //     syntax: "/test <required> [optional]",
    //     category: "test",
    // }).then(message => {
    //     console.log(message);
    // }).catch(err => {
    //     console.log("Couldn't add command");
    //     console.log(err);
    // });


    // client.deleteCommand("779641401482805289").then(message => {
    //     console.log(message);
    // }).catch(err => {
    //     console.log("Couldn't delete command");
    //     console.log(err);
    // });

    // client.editCommand({
    //     id: "779641401482805289",
    //     name: "test",
    //     description: "This is a test command",
    //     syntax: "/test <required> [optional]",
    //     category: "test",
    // }).then(message => {
    //     console.log(message);
    // }).catch(err => {
    //     console.log("Couldn't edit command");
    //     console.log(err);
    // });

    // client.getCommands().then(commands => {
    //     console.log(commands);
    // }).catch(err => {
    //     console.log("Couldn't get commands");
    //     console.log(err);
    // });

    // client.setUses({
    //     id: "779641401482805289",
    //     uses: "+1",
    // }).then(message => {
    //     console.log(message);
    // }).catch(err => {
    //     console.log("Couldn't set uses");
    //     console.log(err);
    // });
});

client.on("reconnected", () => {
    console.log(`Reconnected...`);
});

client.on("reconnecting", () => {
    console.log(`Reconnecting...`);
});

client.on("reminder", data => {
    console.log(data);
    // { id: String, userId: String }
});

client.on("vote", data => {
    console.log(data);
    /*
        {
            user: {
                username: 'clqu',
                discriminator: '0802',
                avatar: 'bfe654bbac2e8f4a134def59cc42ed13',
                tag: 'clqu#0802'
            },
            votes: { 
                daily: 5, 
                weekly: 5, 
                monthly: 5, 
                total: 14 
            }
        }
    */
});