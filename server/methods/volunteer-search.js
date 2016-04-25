import { ESClient } from '../elasticsearch/client'
import {VolunteerProfiles} from '/common/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

/**
 * See alanning:elasticsearch helper library docs at https://github.com/alanning/meteor-elasticsearch
 *
 */

 //ES = new ElasticSearch();

Meteor.methods({

  'volunteers.profiles.search'(searchText) {
    check(searchText, String);
    console.log("[getVolunteerProfiles]", searchText);
    /** Example Only **/
    var query = {
      "match" : {
        "interests": {
          "query" : searchText,
          "operator": "and",
          "fuzziness" : 2
        }
      }
    };

    var result = ES.EsClient.search({
      index: "easysearch",
      type: "volunteer-profiles",
      body: {
        query: query
      }
    });
    console.log(result);
    return result.hits.hits.map(function(doc) {
      return doc._source;
    });
  }

});
