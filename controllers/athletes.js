import Athlete from '../models/Athlete';

export async function get(ctx) {
  ctx.body = await Athlete.findById(ctx.params.athleteId).exec();
}

export async function post(ctx) {
  const data = ctx.request.body;
  if (Object.keys(data).length > 0) {
    ctx.body = await Athlete.create(data);
  } else {
    ctx.body = 'Error! Empty body';
    ctx.status = 400;
  }
}

export async function update(ctx) {
  const data = ctx.request.body;
  if (Object.keys(data).length > 0) {
    ctx.body = await Athlete.findOneAndUpdate({ _id: ctx.params.athleteId }, data);
  }
}

export async function getList(ctx) {
  ctx.body = await Athlete.find({}).exec();
}

export default {
  get,
  post,
  update,
  getList,
};
