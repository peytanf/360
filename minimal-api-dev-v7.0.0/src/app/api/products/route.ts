import { logger } from 'src/utils/logger';
import { STATUS, response, handleError } from 'src/utils/response';

import { _products } from 'src/_mock/_product';

// ----------------------------------------------------------------------

export const runtime = 'edge';

/** **************************************
 * GET - Products (plural endpoint for frontend compatibility)
 *************************************** */
export async function GET() {
  try {
    const products = _products();

    logger('[Products] list', products.length);

    return response({ products }, STATUS.OK);
  } catch (error) {
    return handleError('Products - Get list', error);
  }
} 