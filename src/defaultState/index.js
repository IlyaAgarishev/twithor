const defaulState = [
  {
    key: Date.now(),
    name: 'Slim Shady',
    title: 'Forgot About Dre',
    text:
      "Nowadays everybody wanna talk like they got something to say\
  But nothing comes out when they move their lips\
  Just a bunch of gibberish\
  And motherfuckers act like they forgot about Dre\
  So what do you say to somebody you hate\
  Or anyone tryna bring trouble your way\
  Wanna resolve things in a bloodier way\
  Then just study a tape of N.W.A\
  One day I was walking by\
  With a Walkman on\
  When I caught a guy\
  Give me an awkward eye\
  And I strangled him up in the parking lot\
  With his Karl Kani\
  I don't give a fuck if it's dark or not\
  I'm harder than me tryna park a Dodge\
  When I'm drunk as fuck\
  Right next to a humongous truck in a two-car garage\
  Hopping out with two broken legs\
  Trying to walk it off\
  Fuck you too bitch, call the cops\
  I'mma kill you and them loud-ass motherfucking barking dogs\
  And when the cops came through\
  Me and Dre stood next to a burnt down house\
  With a can full of gas and a hand full of matches\
  And still weren't found out\
  From here on out it's the Chronic II\
  Starting today and tomorrow's anew\
  And I'm still loco enough to choke you to death with a Charleston Chew\
  Slim Shady, hotter then a set of twin babies\
  In a Mercedes Benz with the windows up\
  When the temp goes up to the mid-80s\
  Calling men ladies, sorry, Doc, but I been crazy\
  There's no way that you can save me, it's okay, go with him Hailie",
    likes: 90,
    comments: [
      {
        time:
          new Date().getHours() +
          ':' +
          (new Date().getMinutes() < 10 ? '0' : '') +
          new Date().getMinutes(),
        author: 'Dr.Dre',
        comment: 'They forgot about me lol))))'
      },
      {
        time:
          new Date().getHours() +
          ':' +
          (new Date().getMinutes() < 10 ? '0' : '') +
          new Date().getMinutes(),
        author: 'Killer443',
        comment: 'Killin it, Slim'
      }
    ],
    time:
      new Date().getHours() +
      ':' +
      (new Date().getMinutes() < 10 ? '0' : '') +
      new Date().getMinutes()
  },
  {
    key: Date.now(),
    name: 'Eminem',
    title: 'I am not afraid',
    text:
      "To take a stand, it's been a ride\
    Everybody, I guess I had to\
    Go to that place\
    To get to this one\
    Now some of you\
    Might still be in that place\
    If you're tryin' to get out\
    Just follow me\
    I'll get you there\
    You can try and read my lyrics off of this paper before I lay 'em\
    But you won't take the sting out these words before I say 'em\
    'Cause ain't no way I'm a let you stop me from causin' mayhem\
    When I say I'm a do somethin' I do it\
    I don't give a damn what you think\
    I'm doin' this for me, so fuck the world, feed it beans\
    It's gassed up, if it thinks it's stoppin' me\
    I'mma be what I set out to be, without a doubt undoubtedly\
    And all those who look down on me, I'm tearin' down your balcony\
    No if, ands or buts, don't try to ask him why or how can he\
    From 'Infinite' down to the last 'Relapse' album he's still shittin'\
    Whether he's on salary, paid hourly, until he bows out or he shits his bowels out of him\
    Whichever comes first, for better or worse\
    He's married to the game, like a fuck you for Christmas\
    His gift is a curse, forget the Earth, he's got the urge to pull his dick from the dirt\
    And fuck the whole universe",
    likes: 133,
    comments: [
      {
        time:
          new Date().getHours() +
          ':' +
          (new Date().getMinutes() < 10 ? '0' : '') +
          new Date().getMinutes(),
        author: 'Drake',
        comment: 'Yo, EM. This song is so catchy, damn'
      }
    ],
    time:
      new Date().getHours() +
      ':' +
      (new Date().getMinutes() < 10 ? '0' : '') +
      new Date().getMinutes()
  },
  {
    key: Date.now(),
    name: 'Marshall Mathers',
    title: 'Rap God',
    text:
      "I'm beginning to feel like a Rap God, Rap God\
    All my people from the front to the back nod, back nod\
    Now who thinks their arms are long enough to slap box, slap box?\
    They said I rap like a robot, so call me Rapbot\
    But for me to rap like a computer must be in my genes\
    I got a laptop in my back pocket\
    My pen'll go off when I half-cock it\
    Got a fat knot from that rap profit\
    Made a living and a killing off it\
    Ever since Bill Clinton was still in office\
    With Monica Lewinsky feeling on his nut-sack\
    I'm an MC still as honest\
    But as rude and indecent as all hell syllables, killaholic (Kill 'em all with)\
    This slickety, gibbedy, hibbedy hip hop\
    You don't really wanna get into a pissing match with this rappidy rap\
    Packing a Mac in the back of the Ac, pack backpack rap, yep, yackidy-yac\
    The exact same time I attempt these lyrical acrobat stunts while I'm practicing\
    That I'll still be able to break a motherfuckin' table\
    Over the back of a couple of faggots and crack it in half\
    Only realized it was ironic I was signed to Aftermath after the fact\
    How could I not blow? All I do is drop F-bombs, feel my wrath of attack\
    Rappers are having a rough time period, here's a Maxipad\
    It's actually disastrously bad\
    For the wack while I'm masterfully constructing this masterpiece as\
    I'm beginning to feel like a Rap God, Rap God\
    All my people from the front to the back nod, back nod\
    Now who thinks their arms are long enough to slap box, slap box?\
    Let me show you maintaining this shit ain't that hard, that hard",
    likes: 120,
    comments: [
      {
        time:
          new Date().getHours() +
          ':' +
          (new Date().getMinutes() < 10 ? '0' : '') +
          new Date().getMinutes(),
        author: 'God',
        comment: 'Marshall is the real god, trust me.'
      },
      {
        time:
          new Date().getHours() +
          ':' +
          (new Date().getMinutes() < 10 ? '0' : '') +
          new Date().getMinutes(),
        author: 'Eminem fan #1000000',
        comment:
          'DOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOPE'
      },
      {
        time:
          new Date().getHours() +
          ':' +
          (new Date().getMinutes() < 10 ? '0' : '') +
          new Date().getMinutes(),
        author: 'anonymous',
        comment: 'Lit'
      }
    ],
    time:
      new Date().getHours() +
      ':' +
      (new Date().getMinutes() < 10 ? '0' : '') +
      new Date().getMinutes()
  },
  {
    key: Date.now(),
    name: 'Slim Shady',
    title: 'The Real Slim Shady',
    text:
      "May I have your attention please?\
    May I have your attention please?\
    Will the real Slim Shady please stand up?\
    I repeat will the real Slim Shady please stand up?\
    We're going to have a problem here\
    Y'all act like you never seen a white person before\
    Jaws all on the floor like Pam and Tommy just burst in the door\
    Started whoopin' her ass worse than before, they first get divorced\
    Throwing her over furniture\
    It's the return of the 'Oh wait, no way, your kidding,\
    He didn't just say what I think he did, did he?'\
    And Dr Dre said\
    Nothing you idiots Dr Dre's dead, he's locked in my basement (ha ha)\
    Feminist women love Eminem, chicka chicka chicka Slim Shady I'm sick of him\
    Look at him, walking around grabbing his you know what\
    Flippin' the you know who 'yeah, but he's so cute though'\
    Yea I probably got a couple of screws up in my head loose\
    But no worse than what's going on in your parent's bedrooms\
    Sometimes I want to get on TV and just let loose, but can't,\
    But it's cool for Tom Green to hump a dead moose\
    My bum is on your lips, my bum is on your lips\
    And if I'm lucky you might just give it a little kiss\
    And that's the message that we deliver to little kids\
    And expect them not to know what a women's clitoris is.\
    Of course they gonna know what intercourse is, by the time they hit 4th grade,\
    They got the discovery channel don't they?\
    We ain't nothing but mammals,\
    Well some of us cannibals, who cut other people open like cantaloupes.\
    But if we can hump dead animals and antelopes\
    Then there's no reason that a man and another man can't elope\
    But if you feel like I feel I got the antidote.\
    Women wave your pantyhose, sing the chorus and it goes",
    likes: 420,
    comments: [
      {
        time:
          new Date().getHours() +
          ':' +
          (new Date().getMinutes() < 10 ? '0' : '') +
          new Date().getMinutes(),
        author: 'Fitty Cent',
        comment: 'Slim, dat one is dope'
      },
      {
        time:
          new Date().getHours() +
          ':' +
          (new Date().getMinutes() < 10 ? '0' : '') +
          new Date().getMinutes(),
        author: '21savage',
        comment: 'Yo, Slim be trapping so hard'
      },
      {
        time:
          new Date().getHours() +
          ':' +
          (new Date().getMinutes() < 10 ? '0' : '') +
          new Date().getMinutes(),
        author: 'JayZ',
        comment: 'Nice one.'
      },
      {
        time:
          new Date().getHours() +
          ':' +
          (new Date().getMinutes() < 10 ? '0' : '') +
          new Date().getMinutes(),
        author: 'Dr.Dre',
        comment: 'WE BE BALLIN HARD!!!'
      },
      {
        time:
          new Date().getHours() +
          ':' +
          (new Date().getMinutes() < 10 ? '0' : '') +
          new Date().getMinutes(),
        author: 'Quavo',
        comment:
          'Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way\
        Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way\
        Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way\
        Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way\
        Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way\
        Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way\
        Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way\
        Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way\
        Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way\
        Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way'
      }
    ],
    time:
      new Date().getHours() +
      ':' +
      (new Date().getMinutes() < 10 ? '0' : '') +
      new Date().getMinutes()
  },
  {
    key: Date.now(),
    name: 'Slim Shady',
    title: 'Forgot About Dre',
    text:
      "Nowadays everybody wanna talk like they got something to say\
  But nothing comes out when they move their lips\
  Just a bunch of gibberish\
  And motherfuckers act like they forgot about Dre\
  So what do you say to somebody you hate\
  Or anyone tryna bring trouble your way\
  Wanna resolve things in a bloodier way\
  Then just study a tape of N.W.A\
  One day I was walking by\
  With a Walkman on\
  When I caught a guy\
  Give me an awkward eye\
  And I strangled him up in the parking lot\
  With his Karl Kani\
  I don't give a fuck if it's dark or not\
  I'm harder than me tryna park a Dodge\
  When I'm drunk as fuck\
  Right next to a humongous truck in a two-car garage\
  Hopping out with two broken legs\
  Trying to walk it off\
  Fuck you too bitch, call the cops\
  I'mma kill you and them loud-ass motherfucking barking dogs\
  And when the cops came through\
  Me and Dre stood next to a burnt down house\
  With a can full of gas and a hand full of matches\
  And still weren't found out\
  From here on out it's the Chronic II\
  Starting today and tomorrow's anew\
  And I'm still loco enough to choke you to death with a Charleston Chew\
  Slim Shady, hotter then a set of twin babies\
  In a Mercedes Benz with the windows up\
  When the temp goes up to the mid-80s\
  Calling men ladies, sorry, Doc, but I been crazy\
  There's no way that you can save me, it's okay, go with him Hailie",
    likes: 90,
    comments: [
      {
        time:
          new Date().getHours() +
          ':' +
          (new Date().getMinutes() < 10 ? '0' : '') +
          new Date().getMinutes(),
        author: 'Dr.Dre',
        comment: 'They forgot about me lol))))'
      },
      {
        time:
          new Date().getHours() +
          ':' +
          (new Date().getMinutes() < 10 ? '0' : '') +
          new Date().getMinutes(),
        author: 'Killer443',
        comment: 'Killin it, Slim'
      }
    ],
    time:
      new Date().getHours() +
      ':' +
      (new Date().getMinutes() < 10 ? '0' : '') +
      new Date().getMinutes()
  },
  {
    key: Date.now(),
    name: 'Eminem',
    title: 'I am not afraid',
    text:
      "To take a stand, it's been a ride\
    Everybody, I guess I had to\
    Go to that place\
    To get to this one\
    Now some of you\
    Might still be in that place\
    If you're tryin' to get out\
    Just follow me\
    I'll get you there\
    You can try and read my lyrics off of this paper before I lay 'em\
    But you won't take the sting out these words before I say 'em\
    'Cause ain't no way I'm a let you stop me from causin' mayhem\
    When I say I'm a do somethin' I do it\
    I don't give a damn what you think\
    I'm doin' this for me, so fuck the world, feed it beans\
    It's gassed up, if it thinks it's stoppin' me\
    I'mma be what I set out to be, without a doubt undoubtedly\
    And all those who look down on me, I'm tearin' down your balcony\
    No if, ands or buts, don't try to ask him why or how can he\
    From 'Infinite' down to the last 'Relapse' album he's still shittin'\
    Whether he's on salary, paid hourly, until he bows out or he shits his bowels out of him\
    Whichever comes first, for better or worse\
    He's married to the game, like a fuck you for Christmas\
    His gift is a curse, forget the Earth, he's got the urge to pull his dick from the dirt\
    And fuck the whole universe",
    likes: 133,
    comments: [
      {
        time:
          new Date().getHours() +
          ':' +
          (new Date().getMinutes() < 10 ? '0' : '') +
          new Date().getMinutes(),
        author: 'Drake',
        comment: 'Yo, EM. This song is so catchy, damn'
      }
    ],
    time:
      new Date().getHours() +
      ':' +
      (new Date().getMinutes() < 10 ? '0' : '') +
      new Date().getMinutes()
  },
  {
    key: Date.now(),
    name: 'Marshall Mathers',
    title: 'Rap God',
    text:
      "I'm beginning to feel like a Rap God, Rap God\
    All my people from the front to the back nod, back nod\
    Now who thinks their arms are long enough to slap box, slap box?\
    They said I rap like a robot, so call me Rapbot\
    But for me to rap like a computer must be in my genes\
    I got a laptop in my back pocket\
    My pen'll go off when I half-cock it\
    Got a fat knot from that rap profit\
    Made a living and a killing off it\
    Ever since Bill Clinton was still in office\
    With Monica Lewinsky feeling on his nut-sack\
    I'm an MC still as honest\
    But as rude and indecent as all hell syllables, killaholic (Kill 'em all with)\
    This slickety, gibbedy, hibbedy hip hop\
    You don't really wanna get into a pissing match with this rappidy rap\
    Packing a Mac in the back of the Ac, pack backpack rap, yep, yackidy-yac\
    The exact same time I attempt these lyrical acrobat stunts while I'm practicing\
    That I'll still be able to break a motherfuckin' table\
    Over the back of a couple of faggots and crack it in half\
    Only realized it was ironic I was signed to Aftermath after the fact\
    How could I not blow? All I do is drop F-bombs, feel my wrath of attack\
    Rappers are having a rough time period, here's a Maxipad\
    It's actually disastrously bad\
    For the wack while I'm masterfully constructing this masterpiece as\
    I'm beginning to feel like a Rap God, Rap God\
    All my people from the front to the back nod, back nod\
    Now who thinks their arms are long enough to slap box, slap box?\
    Let me show you maintaining this shit ain't that hard, that hard",
    likes: 120,
    comments: [
      {
        time:
          new Date().getHours() +
          ':' +
          (new Date().getMinutes() < 10 ? '0' : '') +
          new Date().getMinutes(),
        author: 'God',
        comment: 'Marshall is the real god, trust me.'
      },
      {
        time:
          new Date().getHours() +
          ':' +
          (new Date().getMinutes() < 10 ? '0' : '') +
          new Date().getMinutes(),
        author: 'Eminem fan #1000000',
        comment:
          'DOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOPE'
      },
      {
        time:
          new Date().getHours() +
          ':' +
          (new Date().getMinutes() < 10 ? '0' : '') +
          new Date().getMinutes(),
        author: 'anonymous',
        comment: 'Lit'
      }
    ],
    time:
      new Date().getHours() +
      ':' +
      (new Date().getMinutes() < 10 ? '0' : '') +
      new Date().getMinutes()
  },
  {
    key: Date.now(),
    name: 'Slim Shady',
    title: 'The Real Slim Shady',
    text:
      "May I have your attention please?\
    May I have your attention please?\
    Will the real Slim Shady please stand up?\
    I repeat will the real Slim Shady please stand up?\
    We're going to have a problem here\
    Y'all act like you never seen a white person before\
    Jaws all on the floor like Pam and Tommy just burst in the door\
    Started whoopin' her ass worse than before, they first get divorced\
    Throwing her over furniture\
    It's the return of the 'Oh wait, no way, your kidding,\
    He didn't just say what I think he did, did he?'\
    And Dr Dre said\
    Nothing you idiots Dr Dre's dead, he's locked in my basement (ha ha)\
    Feminist women love Eminem, chicka chicka chicka Slim Shady I'm sick of him\
    Look at him, walking around grabbing his you know what\
    Flippin' the you know who 'yeah, but he's so cute though'\
    Yea I probably got a couple of screws up in my head loose\
    But no worse than what's going on in your parent's bedrooms\
    Sometimes I want to get on TV and just let loose, but can't,\
    But it's cool for Tom Green to hump a dead moose\
    My bum is on your lips, my bum is on your lips\
    And if I'm lucky you might just give it a little kiss\
    And that's the message that we deliver to little kids\
    And expect them not to know what a women's clitoris is.\
    Of course they gonna know what intercourse is, by the time they hit 4th grade,\
    They got the discovery channel don't they?\
    We ain't nothing but mammals,\
    Well some of us cannibals, who cut other people open like cantaloupes.\
    But if we can hump dead animals and antelopes\
    Then there's no reason that a man and another man can't elope\
    But if you feel like I feel I got the antidote.\
    Women wave your pantyhose, sing the chorus and it goes",
    likes: 420,
    comments: [
      {
        time:
          new Date().getHours() +
          ':' +
          (new Date().getMinutes() < 10 ? '0' : '') +
          new Date().getMinutes(),
        author: 'Fitty Cent',
        comment: 'Slim, dat one is dope'
      },
      {
        time:
          new Date().getHours() +
          ':' +
          (new Date().getMinutes() < 10 ? '0' : '') +
          new Date().getMinutes(),
        author: '21savage',
        comment: 'Yo, Slim be trapping so hard'
      },
      {
        time:
          new Date().getHours() +
          ':' +
          (new Date().getMinutes() < 10 ? '0' : '') +
          new Date().getMinutes(),
        author: 'JayZ',
        comment: 'Nice one.'
      },
      {
        time:
          new Date().getHours() +
          ':' +
          (new Date().getMinutes() < 10 ? '0' : '') +
          new Date().getMinutes(),
        author: 'Dr.Dre',
        comment: 'WE BE BALLIN HARD!!!'
      },
      {
        time:
          new Date().getHours() +
          ':' +
          (new Date().getMinutes() < 10 ? '0' : '') +
          new Date().getMinutes(),
        author: 'Quavo',
        comment:
          'Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way\
        Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way\
        Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way\
        Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way\
        Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way\
        Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way\
        Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way\
        Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way\
        Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way\
        Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way'
      }
    ],
    time:
      new Date().getHours() +
      ':' +
      (new Date().getMinutes() < 10 ? '0' : '') +
      new Date().getMinutes()
  },
  {
    key: Date.now(),
    name: 'Slim Shady',
    title: 'Forgot About Dre',
    text:
      "Nowadays everybody wanna talk like they got something to say\
  But nothing comes out when they move their lips\
  Just a bunch of gibberish\
  And motherfuckers act like they forgot about Dre\
  So what do you say to somebody you hate\
  Or anyone tryna bring trouble your way\
  Wanna resolve things in a bloodier way\
  Then just study a tape of N.W.A\
  One day I was walking by\
  With a Walkman on\
  When I caught a guy\
  Give me an awkward eye\
  And I strangled him up in the parking lot\
  With his Karl Kani\
  I don't give a fuck if it's dark or not\
  I'm harder than me tryna park a Dodge\
  When I'm drunk as fuck\
  Right next to a humongous truck in a two-car garage\
  Hopping out with two broken legs\
  Trying to walk it off\
  Fuck you too bitch, call the cops\
  I'mma kill you and them loud-ass motherfucking barking dogs\
  And when the cops came through\
  Me and Dre stood next to a burnt down house\
  With a can full of gas and a hand full of matches\
  And still weren't found out\
  From here on out it's the Chronic II\
  Starting today and tomorrow's anew\
  And I'm still loco enough to choke you to death with a Charleston Chew\
  Slim Shady, hotter then a set of twin babies\
  In a Mercedes Benz with the windows up\
  When the temp goes up to the mid-80s\
  Calling men ladies, sorry, Doc, but I been crazy\
  There's no way that you can save me, it's okay, go with him Hailie",
    likes: 90,
    comments: [
      {
        time:
          new Date().getHours() +
          ':' +
          (new Date().getMinutes() < 10 ? '0' : '') +
          new Date().getMinutes(),
        author: 'Dr.Dre',
        comment: 'They forgot about me lol))))'
      },
      {
        time:
          new Date().getHours() +
          ':' +
          (new Date().getMinutes() < 10 ? '0' : '') +
          new Date().getMinutes(),
        author: 'Killer443',
        comment: 'Killin it, Slim'
      }
    ],
    time:
      new Date().getHours() +
      ':' +
      (new Date().getMinutes() < 10 ? '0' : '') +
      new Date().getMinutes()
  },
  {
    key: Date.now(),
    name: 'Eminem',
    title: 'I am not afraid',
    text:
      "To take a stand, it's been a ride\
    Everybody, I guess I had to\
    Go to that place\
    To get to this one\
    Now some of you\
    Might still be in that place\
    If you're tryin' to get out\
    Just follow me\
    I'll get you there\
    You can try and read my lyrics off of this paper before I lay 'em\
    But you won't take the sting out these words before I say 'em\
    'Cause ain't no way I'm a let you stop me from causin' mayhem\
    When I say I'm a do somethin' I do it\
    I don't give a damn what you think\
    I'm doin' this for me, so fuck the world, feed it beans\
    It's gassed up, if it thinks it's stoppin' me\
    I'mma be what I set out to be, without a doubt undoubtedly\
    And all those who look down on me, I'm tearin' down your balcony\
    No if, ands or buts, don't try to ask him why or how can he\
    From 'Infinite' down to the last 'Relapse' album he's still shittin'\
    Whether he's on salary, paid hourly, until he bows out or he shits his bowels out of him\
    Whichever comes first, for better or worse\
    He's married to the game, like a fuck you for Christmas\
    His gift is a curse, forget the Earth, he's got the urge to pull his dick from the dirt\
    And fuck the whole universe",
    likes: 133,
    comments: [
      {
        time:
          new Date().getHours() +
          ':' +
          (new Date().getMinutes() < 10 ? '0' : '') +
          new Date().getMinutes(),
        author: 'Drake',
        comment: 'Yo, EM. This song is so catchy, damn'
      }
    ],
    time:
      new Date().getHours() +
      ':' +
      (new Date().getMinutes() < 10 ? '0' : '') +
      new Date().getMinutes()
  },
  {
    key: Date.now(),
    name: 'Marshall Mathers',
    title: 'Rap God',
    text:
      "I'm beginning to feel like a Rap God, Rap God\
    All my people from the front to the back nod, back nod\
    Now who thinks their arms are long enough to slap box, slap box?\
    They said I rap like a robot, so call me Rapbot\
    But for me to rap like a computer must be in my genes\
    I got a laptop in my back pocket\
    My pen'll go off when I half-cock it\
    Got a fat knot from that rap profit\
    Made a living and a killing off it\
    Ever since Bill Clinton was still in office\
    With Monica Lewinsky feeling on his nut-sack\
    I'm an MC still as honest\
    But as rude and indecent as all hell syllables, killaholic (Kill 'em all with)\
    This slickety, gibbedy, hibbedy hip hop\
    You don't really wanna get into a pissing match with this rappidy rap\
    Packing a Mac in the back of the Ac, pack backpack rap, yep, yackidy-yac\
    The exact same time I attempt these lyrical acrobat stunts while I'm practicing\
    That I'll still be able to break a motherfuckin' table\
    Over the back of a couple of faggots and crack it in half\
    Only realized it was ironic I was signed to Aftermath after the fact\
    How could I not blow? All I do is drop F-bombs, feel my wrath of attack\
    Rappers are having a rough time period, here's a Maxipad\
    It's actually disastrously bad\
    For the wack while I'm masterfully constructing this masterpiece as\
    I'm beginning to feel like a Rap God, Rap God\
    All my people from the front to the back nod, back nod\
    Now who thinks their arms are long enough to slap box, slap box?\
    Let me show you maintaining this shit ain't that hard, that hard",
    likes: 120,
    comments: [
      {
        time:
          new Date().getHours() +
          ':' +
          (new Date().getMinutes() < 10 ? '0' : '') +
          new Date().getMinutes(),
        author: 'God',
        comment: 'Marshall is the real god, trust me.'
      },
      {
        time:
          new Date().getHours() +
          ':' +
          (new Date().getMinutes() < 10 ? '0' : '') +
          new Date().getMinutes(),
        author: 'Eminem fan #1000000',
        comment:
          'DOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOPE'
      },
      {
        time:
          new Date().getHours() +
          ':' +
          (new Date().getMinutes() < 10 ? '0' : '') +
          new Date().getMinutes(),
        author: 'anonymous',
        comment: 'Lit'
      }
    ],
    time:
      new Date().getHours() +
      ':' +
      (new Date().getMinutes() < 10 ? '0' : '') +
      new Date().getMinutes()
  },
  {
    key: Date.now(),
    name: 'Slim Shady',
    title: 'The Real Slim Shady',
    text:
      "May I have your attention please?\
    May I have your attention please?\
    Will the real Slim Shady please stand up?\
    I repeat will the real Slim Shady please stand up?\
    We're going to have a problem here\
    Y'all act like you never seen a white person before\
    Jaws all on the floor like Pam and Tommy just burst in the door\
    Started whoopin' her ass worse than before, they first get divorced\
    Throwing her over furniture\
    It's the return of the 'Oh wait, no way, your kidding,\
    He didn't just say what I think he did, did he?'\
    And Dr Dre said\
    Nothing you idiots Dr Dre's dead, he's locked in my basement (ha ha)\
    Feminist women love Eminem, chicka chicka chicka Slim Shady I'm sick of him\
    Look at him, walking around grabbing his you know what\
    Flippin' the you know who 'yeah, but he's so cute though'\
    Yea I probably got a couple of screws up in my head loose\
    But no worse than what's going on in your parent's bedrooms\
    Sometimes I want to get on TV and just let loose, but can't,\
    But it's cool for Tom Green to hump a dead moose\
    My bum is on your lips, my bum is on your lips\
    And if I'm lucky you might just give it a little kiss\
    And that's the message that we deliver to little kids\
    And expect them not to know what a women's clitoris is.\
    Of course they gonna know what intercourse is, by the time they hit 4th grade,\
    They got the discovery channel don't they?\
    We ain't nothing but mammals,\
    Well some of us cannibals, who cut other people open like cantaloupes.\
    But if we can hump dead animals and antelopes\
    Then there's no reason that a man and another man can't elope\
    But if you feel like I feel I got the antidote.\
    Women wave your pantyhose, sing the chorus and it goes",
    likes: 420,
    comments: [
      {
        time:
          new Date().getHours() +
          ':' +
          (new Date().getMinutes() < 10 ? '0' : '') +
          new Date().getMinutes(),
        author: 'Fitty Cent',
        comment: 'Slim, dat one is dope'
      },
      {
        time:
          new Date().getHours() +
          ':' +
          (new Date().getMinutes() < 10 ? '0' : '') +
          new Date().getMinutes(),
        author: '21savage',
        comment: 'Yo, Slim be trapping so hard'
      },
      {
        time:
          new Date().getHours() +
          ':' +
          (new Date().getMinutes() < 10 ? '0' : '') +
          new Date().getMinutes(),
        author: 'JayZ',
        comment: 'Nice one.'
      },
      {
        time:
          new Date().getHours() +
          ':' +
          (new Date().getMinutes() < 10 ? '0' : '') +
          new Date().getMinutes(),
        author: 'Dr.Dre',
        comment: 'WE BE BALLIN HARD!!!'
      },
      {
        time:
          new Date().getHours() +
          ':' +
          (new Date().getMinutes() < 10 ? '0' : '') +
          new Date().getMinutes(),
        author: 'Quavo',
        comment:
          'Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way\
        Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way\
        Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way\
        Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way\
        Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way\
        Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way\
        Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way\
        Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way\
        Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way\
        Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way Dat way'
      }
    ],
    time:
      new Date().getHours() +
      ':' +
      (new Date().getMinutes() < 10 ? '0' : '') +
      new Date().getMinutes()
  }
];

export default defaulState;
