import express from 'express'
import {
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
  getMyOrders,
  getOrders,
  updateOrderToDelivered,
} from '../contollers/orderController.js'
import { admin, protect } from '../middleware/authMiddleware.js'

const router = express.Router()

router.route('/myorders').get(protect, getMyOrders)
router.route('/').post(protect, addOrderItems).get(protect, admin, getOrders)
router.route('/:id').get(protect, getOrderById)
router.route('/:id/pay').put(protect, updateOrderToPaid)
router.route('/:id/deliver').get(protect, admin, updateOrderToDelivered)

export default router
