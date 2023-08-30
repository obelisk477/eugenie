import  SubHeader  from '../components/SubHeader';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
    // alignItems: 'center'
  }
}

function Landing() {
  return (
    <div style={styles.container} className="brandDetails">
      <SubHeader/>
    </div>
  )
}

export default Landing