const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const botPrefix = "*"

  client.on('ready', msg => {
  console.log(`le bot est ready`)
  console.log(`Statistiques globales : \n\nLe bot a un total de ${client.guilds.cache.size} serveurs. \nPour un total de ${client.users.cache.size} membres.`)
  console.log("Connecté en tant que " + client.user.id + " | Prefix : " + botPrefix + " | Nombre de Serveurs "+ client.guilds.cache.size +" | Nombres de salons "+ client.channels.cache.size +" | Utilisateur totaux "+ client.users.cache.size +" | Nombre d'emojis totaux "+ client.emojis.cache.size +'');
  client.user.setActivity("*help - sur 10 serveurs");
});

client.on('message',  msg => {


if(msg.content == "*help"){
var help = new Discord.MessageEmbed()
        .setTitle("🌐 • Listes des commandes disponibles :")
        .addField("le prefix est "*"")
        .addField("⚡ • Administration ", "`dm(attention celle ci dm tous les membres du serveur avec le message souhaité!)`")
        .addField("⚠️ • Modération ", "`ban`, `kick`, `purge`, `mute`")
        .addField("🔨 • Utilitaires ", "`help`, `infocreabot`, `infobot`, `infodiscord`")
        .addField("🎞️ • Fun", "`ping`, `calin`, `meme`, `defense`, `tg`, `loan`")
        .setColor("#282830")   
        .setTimestamp()
    msg.channel.send(help)
    console.log("------------------------------")
    console.log("le message d'help a été send")
    console.log("------------------------------")
}

if(msg.content == "*infocreabot"){
  var crea = new Discord.MessageEmbed()
  .setTitle("🔨Le Créa🔨")
  .addField("moi c'est", "Just")
  .addField("un problème?", "add moi")
  .addField("`_Just_#7997")
}


if(msg.content == "*infobot"){
  var pre =  new Discord.MessageEmbed()
  .setTitle("MA PRESENTATION")
  .addField("hey moi c'est", "LOAN BOT")
  .addField("🔨 j'ai été developper par", "@_Just_#7997")
  .addField("⚠️pour connaitre mes commandes fait *help")
  .addField("si tu veux m'ajouter sur d'autres serveurs voici mon lien d'invitation")
  .addField("https://discord.com/oauth2/authorize?client_id=793865366153330699&scope=bot&permissions=8")
  .setTimestamp()
msg.channel.send(pre)
console.log("------------------------------")
console.log("le message de présetation a été send")
console.log("------------------------------")
}

if(msg.content == "*infodiscord"){
	var discordinfo = new Discord.MessageEmbed()
	.setTitle("🌐_info du Discord_🌐")
	.addField("ici c'est le serveur de LOAN", "un streamer plutot sympathique")
	.addField("pour commencer respecte les règles! dans le salon #🎆-accepte-les-règles-🎆 ")
	.addField("tu peux retrouver dans ce magnifique serveur un général actif x)", "des notifications des lives videos en temps reel #⛷-annonce-live-🛷 et #🧣-annonce-vidéo-🧤"
	.addField("`BREF`", "tu as juste a chill et à respecter les règles ;)")
	.setTimestamp()
msg.author.sendMessage(discordinfo)
msg.channel.send("le message a été send en pv")
console.log("message infodiscord send en pv")
msg.delete()
}

//fun


if(msg.content == "*ping"){
    const timeTaken = Date.now() - msg.createdTimestamp;
    msg.channel.send(`Pong! latence du message: ${timeTaken}ms.`);
}

if(msg.content == "*chut"){
	let chut = ['https://tenor.com/view/secret-gif-4440621',
	'https://tenor.com/view/ferme-ta-gueule-ta-gueule-ferme-la-ftg-tg-gif-5034299',
	'https://tenor.com/view/daniel-cohn-bendit-gilbert-collard-ferme-ta-gueule-connard-ta-gueule-gif-15958912',
	'https://tenor.com/view/abuse-tais-toi-tg-stop-gif-16694882',
	'https://tenor.com/view/jdg-joueur-du-grenier-ta-gueule-shut-up-gif-13793318',];
	chut = chut[Math.floor(Math.random() * chut.length)];
	msg.channel.send("CHUTTTTTTTTT")
	msg.channel.send(chut);
}
	
if(msg.content == "*calin"){
	let calin = ['https://tenor.com/view/running-hug-embrace-imiss-you-good-to-see-you-again-gif-15965620',
	'https://tenor.com/view/love-you-hug-gif-9894421',
	'https://tenor.com/view/cuddle-party-finding-dory-disney-hug-gif-7278312',
	'https://tenor.com/view/hug-gif-5026053',
	'https://tenor.com/view/clizia-incorvaia-paolo-ciavarro-gfvip-amore-love-gif-17178559',
	'https://tenor.com/view/sweet-sleep-love-kitties-hug-gif-12304006',];
	calin = calin[Math.floor(Math.random() * calin.length)];
	msg.channel.send("mhooooooooooo tiens un calin")
	msg.channel.send(calin);
}

if(msg.content == "*defense"){
       msg.channel.send("*qq cherche la bagueeerre tkt po je te protege*")
       msg.channel.send("https://tenor.com/view/spartans-fight-war-battle-shield-gif-15702953")
       msg.channel.send("https://tenor.com/view/the-matrix-come-lets-do-this-morpeus-training-gif-4946060")
}

if(msg.content == "*meme"){
	let meme = ['https://tenor.com/view/belly-face-fat-funny-gif-3433814',
	'https://tenor.com/view/cat-meat3am-puppy-dog-eyes-gif-8906762',
	'https://tenor.com/view/tomato-password-dank-meme-gif-14262051',
	'https://tenor.com/view/meme-gif-6167100',
	'https://tenor.com/view/hacks-relatable-funny-gif-7537980',
	'https://tenor.com/view/patrick-last-braincell-french-fran%C3%A7ais-gif-18997586',
	'https://tenor.com/view/patrick-last-braincell-french-fran%C3%A7ais-gif-18997586',
	'https://tenor.com/view/patrick-last-braincell-french-fran%C3%A7ais-gif-18997586',
	'https://tenor.com/view/kid-funny-dance-dancing-gif-13442955',
	'https://tenor.com/view/kid-funny-dance-dancing-gif-13442955',
	'https://tenor.com/view/meme-smashing-nigel-gif-11080504',
	'https://tenor.com/view/meme-smashing-nigel-gif-11080504',];
	meme = meme[Math.floor(Math.random() * meme.length)];
	msg.channel.send("tiens un Meme xD")
	msg.channel.send(meme)
}



});

client.login("your bot token");
