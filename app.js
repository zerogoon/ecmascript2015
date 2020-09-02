const friends = ["Dal", "Flynn", "Mark", "Godkimchi", "Japan Guy"];

function* friendTeller() {
    for (const friend of friends) {
        yield friend;
    }
}

const friendLooper = friendTeller();