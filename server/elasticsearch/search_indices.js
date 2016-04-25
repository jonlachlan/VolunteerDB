import * as Collections from '/common/collections'

/**
 *
 * See easysearch:elasticsearch docs at https://atmospherejs.com/easysearch/elasticsearch
 *
 */

/**
 *
 * Todo: Update fields for indexing and uncomment
 */

export const VolunteersIndex = new EasySearch.Index({
  collection: Collections.Volunteers,
  // Example only
  fields: ['interests'],
  engine: new EasySearch.ElasticSearch({
    body: (body) => {
      return body;
    } // modify the body that's sent when searching
  })
});

  //VolunteersIndex.config.elasticSearchClient.putMapping({
    // define custom mapping

  //  "mappings": {
  //  "blog": {
  //    "properties": {
  //      "title": {
  //        "type":     "string",
  //          "analyzer": "english"
  //      }
  //    }
  //  }
  //}
  //
  //});



// const SkillsIndex = new EasySearch.Index({
//  collection: Collections.Skills,
//  // Example only
//  fields: ['skill'],
//  engine: new EasySearch.ElasticSearch({
//    //body: (body) => {
//    //  return body;
//    //} // modify the body that's sent when searching
//  })
//})
//
//
// const InterestsIndex = new EasySearch.Index({
//  collection: Collections.Interests,
//  // Example only
//  fields: ['interests'],
//  engine: new EasySearch.ElasticSearch({
//    //body: (body) => {
//    //  return body;
//    //} // modify the body that's sent when searching
//  })
//})
//
//
// const DistrictsIndex = new EasySearch.Index({
//  collection: Collections.Districts,
//  // Example only
//  fields: ['interests'],
//  engine: new EasySearch.ElasticSearch({
//    //body: (body) => {
//    //  return body;
//    //} // modify the body that's sent when searching
//  })
//})



