const fs = require('fs');
var path = require('path');
const { MessageEmbed } = require('discord.js');
const { strikethrough } = require('@discordjs/builders');

var jsonPath = path.join(__dirname, '..', 'Rankings.json');

let rawdata = fs.readFileSync(jsonPath);
let rank_data = JSON.parse(rawdata);

function getJsonData(Token_ID) {
  var jsonPathBB = path.join(__dirname, '..', 'JSON_FILES', 'Token_ID_' + Token_ID + '.json');
  let rawdataBB = fs.readFileSync(jsonPathBB);
  let full_dataBB = JSON.parse(rawdataBB);

  return full_dataBB;
}

module.exports = {
    minArgs: 1,
    expectedArgs: '<B-Broke Number>',
    callback: ({ message, args }) => {
      //get ID Number
      const id_number = args[0]

      //get token ID and Rank
      full_data =  rank_data.filter(it => it.Token_ID === id_number)
      console.log(full_data)

      let Token_ID;
      let token_json;

      try {
        Token_ID = full_data[0]['Token_ID']
        token_json = getJsonData(Token_ID)
      } catch (error) {
        message.reply(`Invalid Token_ID.`);
        return;
      }

      const targetChannel = message.channel
      if(full_data[0]['Rank'] === '1'){
        try {
          const exampleEmbed = new MessageEmbed()
          .setColor('#0099ff')
          .setTitle(token_json['description'])
          .setURL('https://opensea.io/assets/0xf8ef0631aa8150aee8cfb4db3fa27e81d78df620//' + Token_ID)
          .addFields(
            { name: 'Rank', value: '#'+full_data[0]['Rank'], inline: true },
            { name: 'Token_ID', value: full_data[0]['Token_ID'], inline: false },
          )
          .addFields(
            { name: token_json['attributes'][0]['trait_type'], value: token_json['attributes'][0]['value'], inline: true },
          )
          .setImage(token_json['image'])
          .setTimestamp()
          .setFooter('©Flaip', 'https://lh3.googleusercontent.com/bVGnQR2eYrE-F6wFQuE-jV0xGnN0PuAX0pE0fm58lx2ywmKwBBG68olPfYDtoAAk_sTekAU9sfhNsdRwNhTi0BgEZcyp_O9zV1GpEQ=w600');
  
          targetChannel.send({ embeds: [exampleEmbed] });
        } catch (error) {
          message.reply(`Invalid B-Block Number.`);
        }
      }else{
        try {
          const exampleEmbed = new MessageEmbed()
          .setColor('#0099ff')
          .setTitle(token_json['description'])
          .setURL('https://opensea.io/assets/0xf8ef0631aa8150aee8cfb4db3fa27e81d78df620//' + Token_ID)
          .addFields(
            { name: 'Rank', value: '#'+full_data[0]['Rank'], inline: true },
            { name: 'Token_ID', value: full_data[0]['Token_ID'], inline: false },
          )
          .addFields(
            { name: token_json['attributes'][0]['trait_type'], value: token_json['attributes'][0]['value'], inline: true },
            { name: token_json['attributes'][1]['trait_type'], value: token_json['attributes'][1]['value'], inline: true },
            { name: token_json['attributes'][2]['trait_type'], value: token_json['attributes'][2]['value'], inline: true },
          )
          .addFields(
            { name: token_json['attributes'][3]['trait_type'], value: token_json['attributes'][3]['value'], inline: true },
            { name: token_json['attributes'][4]['trait_type'], value: token_json['attributes'][4]['value'], inline: true },
            { name: token_json['attributes'][5]['trait_type'], value: token_json['attributes'][5]['value'], inline: true },
          )
          .addFields(
            { name: token_json['attributes'][6]['trait_type'], value: token_json['attributes'][6]['value'], inline: true },
            { name: token_json['attributes'][7]['trait_type'], value: token_json['attributes'][7]['value'], inline: true },
            { name: token_json['attributes'][8]['trait_type'], value: token_json['attributes'][8]['value'], inline: true },
          )
          .addFields(
            { name: token_json['attributes'][9]['trait_type'], value: token_json['attributes'][9]['value'], inline: true },
            { name: token_json['attributes'][10]['trait_type'], value: token_json['attributes'][10]['value'], inline: true },
            { name: token_json['attributes'][11]['trait_type'], value: token_json['attributes'][11]['value'], inline: true },
          )
          .setImage(token_json['image'])
          .setTimestamp()
          .setFooter('©Flaip', 'https://lh3.googleusercontent.com/bVGnQR2eYrE-F6wFQuE-jV0xGnN0PuAX0pE0fm58lx2ywmKwBBG68olPfYDtoAAk_sTekAU9sfhNsdRwNhTi0BgEZcyp_O9zV1GpEQ=w600');

          targetChannel.send({ embeds: [exampleEmbed] });
        } catch (error) {
          message.reply(`Invalid Token_ID.`);
        }
      }
  }
}