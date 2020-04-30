let feelings = `Fulfilled
    Patient
    Peaceful
    Present
    Relaxed
    Serene
    Trusting
    Calm
    Centered
    Content
    Amazed
    Awe
    Bliss
    Delighted
    Eager
    Ecstatic
    Enchanted
    Energized
    Engaged
    Enthusiastic
    Excited
    Free
    Happy
    Inspired
    Invigorated
    Lively
    Passionate
    Playful
    Radiant
    Refreshed
    Rejuvenated
    Renewed
    Satisfied
    Thrilled
    Vibrant
    Agitated
    Aggravated
    Bitter
    Contempt
    Cynical
    Disdain
    Disgruntled
    Disturbed
    Edgy
    Exasperated
    Frustrated
    Furious
    Grouchy
    Hostile
    Impatient
    Irritated
    Irate
    Moody
    On edge
    Outraged
    Pissed
    Resentful
    Upset
    Vindictive
    Adventurous
    Brave
    Capable
    Confident
    Daring
    Determined
    Free
    Grounded
    Proud
    Strong
    Worthy
    Valiant 
    Salubrious
    Accepting
    Affectionate
    Caring
    Compassion
    Empathy
    Fulfilled
    Present
    Safe
    Warm
    Worthy
    Curious
    Engaged
    Exploring
    Fascinated
    Interested
    Intrigued
    Involved
    Stimulated
    Anguish
Depressed
Despondent
Disappointed
Discouraged
Forlorn
Gloomy
Grief
Heartbroken
Hopeless
Lonely
Longing
Melancholy
Sorrow
Teary
Unhappy
Upset
Weary
Yearning
Aloof
Bored
Confused
Distant
Empty
Indifferent
Isolated
Lethargic
Listless
Removed
Resistant
Shut Down
Uneasy
Withdrawn
Afraid
Anxious
Apprehensive
Frightened
Hesitant
Nervous
Appreciative
Blessed
Delighted
Fortunate
Grace
Humbled
Lucky
Moved
Thankful
Touched
Concerned
Dissatisfied
Disturbed
Grouchy
Hesitant
Inhibited
Perplexed
Questioning
Rejecting
Reluctant
Shocked
Skeptical
Suspicious
Ungrounded
Unsure
Worried
Worn out
Sweaty
Tender
Tense
Throbbing
Tight
Tingling
Trembly
Twitchy
Vibrating
Warm
Wobbly
Wooden
Shaky
Shivery
Slow
Smooth
Soft
Sore
Spacey
Spacious
Sparkly
Stiff
Still
Suffocated
Numb
Pain
Pounding
Prickly
Pulsing
Queasy
Radiating
Relaxed
Releasing
Rigid
Sensitive
Settled
Gentle
Hard
Heavy
Hollow
Hot
Icy
Itchy
Jumpy
Knotted
Light
Loose
Drained
Dull
Electric
Empty
Expansive
Breathless
Hurt
Cold
Caged`
feelings = feelings.split("\n").map(x=> x.trim().toLowerCase())

let weather = `Rainy
Stormy
Sunny
Cloudy
Hot
Cold
Dry
Wet
Humid
Foggy darkness
Snowy
Misty
muggy
sticky
clear
cloudless and bright
mild and springy
crisp 
chilly
weak sunshine
damp air
brisk
refreshingly bright
bleak
soft and grey
gloomy
deep clear blue
bitterly cold
blustery
drizzling
pouring rain
`
weather = weather.split("\n").map(x=> x.toLowerCase())

let locations = `Airplane
Airport Check-in
Alley
Amusement Park
Attic
Bakery
Bank
Basement
Bathroom (home)
Barn
Beach
Bedrooms
Birthday Party
Bonfire
Bowling Alley
Bridge
Bookstore
Cafeteria
Casino
Cave
Church
City Park
Classroom
Closet
Coffee House
Desert
Diner
Elevator
Farms
Forest
Garage
Garage Sale
Garden
Graveyard
Grocery Store
Haunted House
Plant Shop
High School Hallway
Hospital
Hotel Room
House Party
Kitchen
Lake
Library
Meadow
Castle
Marketplace
Middle School Dance (informal)
Mountains
Movie Theatre
Night Club
Sea Bed
Old Pick-Up Truck
Pond
Pub
Public Pool (Outdoor)
Rainforest/Jungle
Ranch (Commune)
Restaurant
River
Shopping Mall
Stands at a Sporting Event
Subway Station
Taxi cab
backyard shed
Treehouse
Tropical Island City
Urban Street
Video Arcade
Waiting Room
Waterfall
Woods at Night
Zoo`
locations = locations.split("\n").map(x=> x.toLowerCase())


const button = document.querySelector('button')
button.addEventListener('click', prompt)

const body = document.querySelector('body')

function prompt(){
    let message = 'THE FEELING: \n'
    message += `     => ${randomizer(feelings)}\n` 
    message += ' THE WEATHER: \n'
    message += `     => ${randomizer(weather)}\n`
    message += ' THE LOCATION: \n'
    message += `     => ${randomizer(locations)}\n`
    message += ''
    appendMessage(message)
}

function randomizer(arr){
    const randomIndex = Math.floor(Math.random()*arr.length)
    return arr[randomIndex]
}

function appendMessage(mes){
    const divvy = document.createElement('div')
    divvy.innerText = mes
    body.appendChild(divvy)
}