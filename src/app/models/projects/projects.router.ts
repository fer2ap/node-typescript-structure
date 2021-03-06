import { Application, Response, Router } from 'express';
import { authMiddleware } from '../../middlewares/authMiddleware';
import { IAuthMiddlewareRequest } from '../../@types/IAuthMiddlewareRequest';

export function projectsRouter (app: Application): void {
	const router = Router();
	router.get('/', authMiddleware, async (request: IAuthMiddlewareRequest, response: Response): Promise<Response> => {
		return response.send({ message: 'Projects index', userId: request.userId });
	});
	app.use('/projects', router);
}
