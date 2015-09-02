![DreamEngine Logo](http://dreamengine.dreamirl.com/assets/imgs/logo.png)

Dream-Engine - a powerful 2D games engine - Canvas2D version
===========

This is the Canvas2D version, it's the first version of the Dream-Engine and fit perfect for mobile games, and also middle size games.

Here is some cases this version isn't good (and you should use the PIXI version instead):
- you need shaders or blend mode
- you have more than 1500 images files to load and use
- you want display a lot of image/texture bigger than 2048*2048 (I mean more than 250 at the same time)
- to use "sheets" in JSON format
- in your game you plan to get more than 4000 sprites displayed at the same time

In other case this is maybe the best choice, it's compatible from IE9 and all others browser, and performances enhanced for mobiles.

The Dream-Engine is a free open source engine to create HTML5 games.
It's made for HD graphics, touch and gamepad compatibilities, and try to let you do th interesting stuff while doing the boring part for you.
The Dream-Engine is a very good engine to write a finished, professional game, with good performances, and it'll work well everywhere.

It's not a "button click software" or a library with all logic included, you have to go programming with it, you'll focus on game-logic and content while the engine will take care of compatibilities, screens sizes, audio, loadings, etc.

The main focus on the engine was made on the core engine first, with micro-tools (like inputs, renderers), and now it's very simple to create plugins, advanced tools, editors, logics... I add constantly new stuff and anyone can do it too.

Today after several games, I can say it's ready and we can start fixing bad stuff, doing a better doc, and add more plugins and samples to get faster and faster.

Checkout the changelog.txt for updates details

Update 0.25.1
-------
This update is the last one I did on the DreamEngine, here is lot of new stuff and bug changes !
- now the repositories have 4 branches, the master contain all stuff, pixi is the branches with pixi version inside and canvas2d is the version with canvas2d (the old one, but I keep working on), and the branche "site" contain doc and website only, for those who want to contribute on it you're welcome.

Check out samples
-------

Please feel free to check out samples, it took me around 5 and 15 minutes to wrote one simple, it's a very good way to see how fast it is and to help you start with the engine.
The best thing you can do now is checking samples in the custom folder (because it's here I push "custom" files ;) ) and try to play with it.


Who can use it, why use it
-------

When I say who I mean about programming skills, and about what are you looking for, everyone can use it even companies :)
This is to help leaders who wanna try something new and have to make a decision.

If you are looking for a "clicking game factory" or if you fear programming, or can't/don't want thinking about "code architecture" this engine isn't for you.
I built it around RequireJS, I think always about "DRY" (don't repeat yourself) and architecture, I wanted to create something I could sustain and make it grow with no limits, but at the same time, providing the lightest stuff, with which you can do as much as possible.

Here we aren't talking about "I take the engine and I code my game" it's rather "this is a library, now you add your stuff on it and make your games", by using the engine like this, you'll be very productive at the end, you have to learn it before, lucky you I wrote few samples to help you get in faster.

Of course you can make a game directly (like most of examples) and it works well like that, but this will not maintainable and you'll not be able to make "big games" (you'll suicide before lol) I did several games for companies and for myself, and even I had to manage 1000+ images, it's still working.

So finally I think this engine is for people who want to make a game with HD graphics, lot of image and inputs, and lot of files :p
I used this engine in lot of game jams, and I always use 720p as minimal quality setting, check the engine's website.

Cool features
-------

Ok so there is some cool features
* gamepad's API for Chrome, Firefox, Edge and a compatible one with Windows8 (if you bring the XInput component on you project and use the SystemDetection)
* multi-quality (you need no more stuff than write your qualities settings in the imagesDatas file)
* Inputs triggering are very simple (keyboard and mouse/touch, compatible with multi-touch, and possible to work with interval) just write a settings file
* nice Game Objects, with a hierarchy system and with components (renderers, collider, events triggering), the addAutomatism is your new friend (very powerfull for AI, timers, delay, it's like a setTimeout but with or without repeat and under control of the engine and the delta-time)
* it's think to inherit from base class as you want (so it's very easy to make plugins for everyone), but it's only an option you can also make your whole game in one file ;)
* a simple image loader with configuration through a basic list (handle complex sheet loading in the PIXI version only)
* it work with an intern dictionary (LangSystem) to provide an easy way for the localisation
* Achievement API inside
* Audio file loading and API inside, split FX and musics
* powerfull mouse/touch events tree, from the render to the collider, you can handle event on each objects and shut it down
* easy to bring on new platforms with the SystemDetection (you have to override what you want in the system file, and bind stuff on init)


Compatible with "native" platforms
-------

When I speak about "native platforms" I mean, include in a wrapper to make an executable (apk, etc..)
This part is in early release it's experimental and work well when it's finished (for w8 / 8.1 and wp)
* Windows8 - 8.1 - VS Express - OK
* WP8 - VS Express - OK
* KindleFire (amazon appstore) - Webapp - WIP (soon)
* Tizen - Tizen SDK - WIP (soon)
* Android - Phonegap - not yet
* iOS - not yet (I don't have device to do it)

Documentation
-------

[The "big" how to here](http://dreamengine.dreamirl.com/#howto).
I didn't wrote a documentation yet, I'll use jsdoc or something like that. I just finished the "how to" (it's big enough to make a complete game).

Contributing
-------

You wrote a game ? A plugin ? An editor ? Or other stuff ?
You know a better way to do something in the engine (physics, loops, inputs, gui...) ?
Feel free to contact me: inateno@gmail.com
Or send us a tweet/pm, or simply a pull request.

A little word about "story" (and why I did it)
-------

I pushed this engine on github after one work year at very part time, I worked mainly during Game-Jams because I didn't wanted to create a "theoric" engine (think about it during a time then make it) but I built this engine around my needs, when you make a games and you know what you would like in the engine.

Inputs are boring things, gamepads, calculate positions and rotations, or to think game's objects architecture and components.
I didn't make more complex stuff like physic, a good Gui (still wip), I don't care at the moment, I wanted a good architecture for all of my games, now adding features on the engine is not the most complicated.

Credits
===========

The engine is made by Rogliano Antoine aka [Inateno](http://inateno.com)
The official website [HTML5-Dreamengine](http://dreamengine.dreamirl.com) if you wanna help me on this I say hell yes.
You can also follow me on [Twitter](http://twitter.com/inateno)

Also I'm streaming on Twitch sometimes about "making games with Dreamengine", search Inateno.

License
-------

The Dreamengine is released under the [MIT License](http://opensource.org/licenses/MIT).

Finally it's here for everyone, feel free to use it, share it and contribute.

Feel free to contact me, I'm on Twitter @Inateno or the team @DreamirlGames (Dreamirl on Facebook)
