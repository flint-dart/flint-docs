# Tools & Function Calling 🛠️

Flint Tools allow LLMs to safely query databases, call external APIs, and execute server-side business logic with strict schema validation and policy guards.

---

## 🔧 Creating a Tool

```dart
final fetchOrderTool = FlintTool(
  name: 'fetch_order_details',
  description: 'Retrieve order tracking status and line items by order ID',
  parameters: {
    'orderId': ToolParameter.string(
      description: 'The unique numeric or UUID order ID',
      required: true,
    ),
  },
  execute: (args) async {
    final orderId = args['orderId'];
    final order = await Order().find(orderId);
    
    if (order == null) {
      return {'error': 'Order not found'};
    }
    
    return {
      'status': order.status,
      'trackingNumber': order.trackingNumber,
      'estimatedDelivery': order.estimatedDelivery.toIso8601String(),
    };
  },
);
```

---

## 🛡️ Tool Execution Policies

Add guard policies to require user confirmation or authorization checks before running sensitive tools:

```dart
final secureRefundTool = FlintTool(
  name: 'issue_refund',
  description: 'Issue a monetary refund to customer payment method',
  policy: ToolPolicy(
    requiresApproval: true,
    allowedRoles: ['admin', 'manager'],
  ),
  execute: (args) async {
    // Process refund logic
  },
);
```
