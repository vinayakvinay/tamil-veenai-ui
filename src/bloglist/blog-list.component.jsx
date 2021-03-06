import React, { Component } from 'react';
import BlogListCell from '../bloglist-cell/bloglist-cell.component';

class BlogList extends Component {

  render() {
    const cells = this.props.articles.map((article, idx) => <BlogListCell {...article} key={idx} />);
    return (
      <div>
        {cells}
      </div>
    );
  }
}

export default BlogList;

// full description

// {
//   title: 'தமிழ்ச் சங்கம்',
//   description: `சங்கம் என்பது ஒரு குறிப்பிட்ட குறிக்கோளுக்காக, ஒருமித்த கருத்துடன் செயல்படும் ஒரு கூட்டமைப்பு என்று தமிழ் கூறும். தமிழ் வளர்ப்பதை தன் உயிரினும் மேலான குறிக்கோளாகக் கொண்ட ஒரு கூட்டமைப்பே தமிழ்ச் சங்கம் ஆகும். தமிழ்ச் சங்கம் வெவ்வேறு காலகட்டங்களில், பல்வேறு பெரும் புலவர்களும், தமிழ் ஆய்வாளர்கள் மற்றும் ஆர்வலர்களுடனும் இயங்கி வந்துள்ளது. தமிழ்ச் சங்கத்தினை உருவாக்கிய பெருமையும், புலவராகவும், ஆய்வாளராகவும், ஆர்வலராகவும் தன்னை உட்புகுத்தி அவையை அலங்கரித்த மாண்பும் அக்காலத்தில் வாழ்ந்த பாண்டிய மன்னர்களையே சாரும்.
//     <br />
//     <br />
//         1. முதல் தமிழ்ச் சங்கம் (தலைச் சங்கம்)<br />
//         2. இரண்டாம் தமிழ் சங்கம் (இடைச் சங்கம்)<br />
//         3. மூன்றாம் தமிழ்ச் சங்கம் (கடைச் சங்கம்)<br />
//     <br />            
//     மூன்றாம் தமிழ்ச் சங்கத்தில் அங்கம் வகித்த நக்கீரரின் "இறையனார் களவழி உரை"யின் மூலம் மற்ற இரு தமிழ்ச் சங்கத்தினைப் பற்றி அறியலாம்.`,
//   tag: 'tamil-sangam',
//   category: 'general',
//   claps: 0,
//   created_at: 'Oct 21, 2018',
//   updated_at: 'Oct 21, 2018'
// }