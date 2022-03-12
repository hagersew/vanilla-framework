main = () => {
  axios
    .get('https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json')
    .then((response) => {
      const app = document.getElementById('root');
      const container = document.createElement('div');
      container.setAttribute('class', 'row');
      app.appendChild(container);

      response.data.forEach((element) => {
        const card = document.createElement('div');
        card.setAttribute('class', 'p-card card col-4 p-card--highlighted');

        const separatorTop = document.createElement('hr');
        separatorTop.setAttribute('class', 'is_muted');

        const topic = document.createElement('h5');
        topic.setAttribute('class', 'topic-top');
        if (element.topic.length !== 0) topic.textContent = element.topic;
        else {
          topic.textContent = 'topic';
        }

        const image = document.createElement('img');
        image.setAttribute('class', 'p-card__image');
        image.src = element.featured_media;

        const title = document.createElement('h3');

        const titleAnchor = document.createElement('a');
        titleAnchor.textContent = element.title.rendered;
        title.appendChild(titleAnchor);
        titleAnchor.setAttribute('href', '#');

        const author = document.createElement('div');
        author.textContent = 'By ';

        const authorAnchor = document.createElement('a');
        authorAnchor.textContent = element.author;
        author.appendChild(authorAnchor);
        authorAnchor.setAttribute('href', '#');
        author.append(' on ');
        author.append(moment(element.date).format('d MMMM YYYY'));

        const separatorBottom = document.createElement('hr');
        separatorBottom.setAttribute('class', 'is_muted');

        const article = document.createElement('h5');
        article.setAttribute('class', 'topic-bottom');
        article.textContent = element.author;

        card.appendChild(topic);
        card.appendChild(separatorTop);
        card.appendChild(image);
        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(separatorBottom);
        card.appendChild(article);
        container.appendChild(card);
      });
    });
};
main();
