import { connect } from 'react-redux'
export default function Home() {
  return (
    <div>
      <h1>Hello Redux!</h1>
    </div>
  );
}


const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps)(Home)