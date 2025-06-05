import type { NextRequest } from 'next/server';

import { logger } from 'src/utils/logger';
import { STATUS, response, handleError } from 'src/utils/response';

import { _products } from 'src/_mock/_product';

// ----------------------------------------------------------------------

export const runtime = 'edge';

/** **************************************
 * GET - Get Product by ID
 *************************************** */
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = req.nextUrl;
    const productId = searchParams.get('productId') || '';
    const name = searchParams.get('name') || '';

    const products = _products();
    
    // Find product by ID or name
    let product;
    if (productId) {
      product = products.find((item) => item.id === productId);
    } else if (name) {
      // Convert URL slug back to find product
      product = products.find((item) => 
        item.name.toLowerCase().replace(/\s+/g, '-') === name ||
        item.id === name
      );
    }

    if (!product) {
      return response({ message: 'Product not found' }, STATUS.NOT_FOUND);
    }

    logger('[Products] get product', { productId, name, foundProduct: product.name });

    return response({ product }, STATUS.OK);
  } catch (error) {
    return handleError('Products - Get product', error);
  }
} 