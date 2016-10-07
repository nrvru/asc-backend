import Router from 'koa-router';
import { getList, get, post, update } from '../controllers/athletes';

const athletes = new Router();

athletes
  .get('/', getList)
  .get('/:athleteId', get)
  .post('/', post)
  .put('/:athleteId', update);

export default athletes;

