main = () => {
 axios.get('https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json')
    .then((response) => {
      console.log(response.data);

      const app = document.getElementById('root');
      const container = document.createElement('div');
      container.setAttribute('class', 'container');
      app.appendChild(container);

      response.data.forEach((element) => {
        console.log(element);

        const card = document.createElement('div');
        card.setAttribute('class', 'card');

        const header = document.createElement('div');
        header.setAttribute('class', 'header');

        const topic = document.createElement('h1');
        topic.textContent = element.topic;

        const body = document.createElement('div');
        body.setAttribute('class', 'body');

        const title = document.createElement('h1');
        title.textContent = element.title.rendered;

        const image = document.createElement('img');
        image.src = element.featured_media;

        const by = document.createElement('p');
        by.textContent = 'By ';

        const author = document.createElement('span');
        author.textContent = element.author;

        const footer = document.createElement('div');
        footer.setAttribute('class', 'footer');

        const article = document.createElement('h1');
        article.textContent = element.author;

        header.appendChild(topic);
        card.appendChild(header);

        body.appendChild(image);
        body.appendChild(title);

        by.appendChild(author);
        by.append(' on ');
        by.append(moment(element.date).format('d MMMM YYYY'));
        body.appendChild(by);

        footer.appendChild(article);
        card.appendChild(body);
        card.appendChild(footer);

        container.appendChild(card);
      });
    });
};
main();
