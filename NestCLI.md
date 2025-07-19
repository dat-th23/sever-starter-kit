Đây là những câu lệnh NestJS CLI quan trọng cần nhớ:

## Cài đặt và khởi tạo
```bash
npm i -g @nestjs/cli          # Cài đặt Nest CLI
nest new project-name         # Tạo project mới
nest new . --skip-git        # Tạo project trong thư mục hiện tại
```

## Tạo các thành phần
```bash
nest g controller users       # Tạo controller
nest g service users         # Tạo service
nest g module users          # Tạo module
nest g resource users        # Tạo đầy đủ module, controller, service, DTOs
nest g guard auth            # Tạo guard
nest g interceptor logging   # Tạo interceptor
nest g pipe validation       # Tạo pipe
nest g filter http-exception # Tạo exception filter
nest g middleware logger     # Tạo middleware
nest g decorator roles       # Tạo decorator
nest g gateway events        # Tạo WebSocket gateway
```

## Chạy ứng dụng
```bash
npm run start                # Chạy ứng dụng
npm run start:dev           # Chạy với hot-reload (development)
npm run start:debug         # Chạy với debug mode
npm run start:prod          # Chạy production build
npm run build               # Build ứng dụng
```

## Testing
```bash
npm run test                # Chạy unit tests
npm run test:watch         # Chạy tests với watch mode
npm run test:cov           # Chạy tests với coverage
npm run test:e2e           # Chạy end-to-end tests
```

## Các option hữu ích
```bash
nest g controller users --no-spec    # Tạo không kèm file test
nest g service users --flat         # Không tạo thư mục riêng
nest g module users --dry-run       # Xem preview không tạo thật
```

Những câu lệnh này sẽ giúp bạn làm việc hiệu quả với NestJS trong quá trình phát triển ứng dụng.