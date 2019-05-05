import $ from 'jquery'
import queryString from 'query-string'
import Fuse from 'fuse.js'
import Mustache from 'mustache'

import './index.less'

window.jQuery = $
window.$ = $

$('#results').ready(function() {
  const params = queryString.parse(location.search)

  if (params.q !== '') {
    $.getJSON('/index.json', function(data) {
      let options = {
        shouldSort: true,
        includeMatches: true,
        threshold: 0.0,
        tokenize: true,
        location: 0,
        distance: 100,
        maxPatternLength: 32,
        minMatchCharLength: 1,
        keys: [
          { name: 'title', weight: 0.8 },
          { name: 'contents', weight: 0.5 },
          { name: 'tags', weight: 0.3 },
          { name: 'categories', weight: 0.3 }
        ]
      }

      let fuse = new Fuse(data, options)
      let result = fuse.search(params.q)
      let template = $('#results-template').html()



      console.log('matches', result)


      Mustache.tags = ['<%', '%>']
      $('#results').html(Mustache.render(template, result))
    })
  }
})
