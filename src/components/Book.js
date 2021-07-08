import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import myStyle from '../stylesheet/style';

function Book({ book, handleRemoveBook }) {
  const { title, category } = book;
  const classes = myStyle();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          helo
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item lg={12}>
          <Paper className={classes.paper}>
            <div>
              <p>{category}</p>
              <h2>{title}</h2>
              <button type="submit" onClick={() => handleRemoveBook(book)}>Remove Book</button>
            </div>
          </Paper>
        </Grid>
        <Grid item lg={12}>
          <Paper className={classes.paper}>
            <div>
                <p className="lorem">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione ab quas quisquam asperiores nisi quia maiores a praesentium facere iure accusantium omnis maxime
                 provident, repudiandae nesciunt sunt accusamus ad iusto.</p>
            </div>
          </Paper>
        </Grid>
        <Grid item lg={12}>
          <Paper className={classes.paper}>
            <div>
                <p className="lorem">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione ab quas quisquam asperiores nisi quia maiores a praesentium facere iure accusantium omnis maxime
                 provident, repudiandae nesciunt sunt accusamus ad iusto. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, modi repellat magnam earum commodi hic ratione assumenda quidem, quas cupiditate consequuntur dolorum saepe 
                 architecto facilis quisquam asperiores iure laudantium totam.</p>
            </div>
          </Paper>
        </Grid>
        <Grid item lg={12}>
          <Paper className={classes.paper}>
            <div>
                <p className="lorem">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione ab quas quisquam asperiores nisi quia maiores a praesentium facere iure accusantium omnis maxime
                 provident, repudiandae nesciunt sunt accusamus ad iusto. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere molestias numquam tempora, esse quia adipisci assumenda sed quam vero aut aliquam maiores totam odit
                  consequuntur enim, consectetur saepe! Sequi, facilis.</p>
            </div>
          </Paper>
        </Grid>
        <Grid item lg={12}>
          <Paper className={classes.paper}>
            <div>
                <p className="lorem">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione ab quas quisquam asperiores nisi quia maiores a praesentium facere iure accusantium omnis maxime
                 provident, repudiandae nesciunt sunt accusamus ad iusto.</p>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};

export default Book;
