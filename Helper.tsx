export const onTextLayout = (e: any, setShowMore: any) => {
  const {
    layout: {height},
  } = e.nativeEvent;
  const lineHeight = 20;
  const numLines = Math.floor(height / lineHeight);
  if (numLines >= 3) {
    setShowMore(true);
  } else {
    setShowMore(false);
  }
};
export const data = [
  {
    username: 'Usup Suparma',
    date: 'Mar 27, 2023',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci, consectetur adipiscing elit. Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci, consectetur adipiscing elit. Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci, consectetur adipiscing elit. Nulla luctus in ipsum adictum.',
    voters: 0,
    comment: [
      {
        username: 'Usup Suparma',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci',
      },
      {
        username: 'Usup Suparma',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci',
      },
    ],
  },
  {
    username: 'Usup Suparma',
    date: 'Mar 27, 2023',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci, consectetur adipiscing elit. Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci, consectetur adipiscing elit. Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci, consectetur adipiscing elit. Nulla luctus in ipsum adictum.',
    voters: 0,
    comment: [
      {
        username: 'Usup Suparma',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci',
      },
    ],
  },
  {
    username: 'Usup Suparma',
    date: 'Mar 27, 2023',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci, consectetur adipiscing elit. Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci, consectetur adipiscing elit. Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci, consectetur adipiscing elit. Nulla luctus in ipsum adictum.',
    voters: 0,
    comment: [
      {
        username: 'Usup Suparma',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci',
      },
    ],
  },
];

export const handleUpvote = (index: number, feed: any, setFeed: any) => {
  const newData = [...feed];
  newData[index].voters += 1;
  setFeed(newData);
};
export const handleDownvote = (index: number, feed: any, setFeed: any) => {
  const newData = [...feed];
  newData[index].voters -= 1;
  setFeed(newData);
};
export const handleAddComment = (
  index: number,
  feed: any,
  setFeed: any,
  value: string,
) => {
  const newData = [...feed];
  newData[index].comment.push(value);
  setFeed(newData);
};
