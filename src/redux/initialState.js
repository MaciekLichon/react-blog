const initialState = {
  posts: [
    {
      id: '1',
      title: 'Article 1',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the 1st article',
      publishedDate: new Date('01-01-2021'),
      author: 'John Doe',
      category: 'Sport'
    },
    {
      id: '2',
      title: 'Article 2',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the 2nd article',
      publishedDate: new Date('02-02-2022'),
      author: 'John Doe',
      category: 'News'
    },
    {
      id: '3',
      title: 'Article 3',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the 3rd article',
      publishedDate: new Date('03-03-2023'),
      author: 'John Doe',
      category: 'Sport'
    },
    {
      id: '4',
      title: 'Article 4',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the 4th article',
      publishedDate: new Date('04-04-2024'),
      author: 'John Doe',
      category: 'Movies'
    },
  ],

  categories: ['Sport', 'News', 'Movies'],
};

export default initialState;
