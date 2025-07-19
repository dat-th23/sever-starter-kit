# NestJS Starter Kit

Một dự án starter kit đầy đủ cho NestJS, tích hợp các công nghệ tốt nhất để phát triển ứng dụng back-end hiệu quả.

## 🚀 Tính năng nổi bật

- **Cấu trúc dự án chuẩn hóa** theo best practices của NestJS
- **Authentication** sẵn sàng với JWT
- **Validation** dữ liệu bằng class-validator
- **ORM tích hợp** (TypeORM hoặc Prisma - có thể cấu hình)
- **Environment variables** với `@nestjs/config`
- **Testing** đầy đủ (unit, e2e)
- **Error handling** tập trung
- **Logging** middleware
- **Docker** hỗ trợ
- **CI/CD** ready (GitHub Actions)

## 📌 Prerequisites

- Node.js v18+
- npm/yarn
- Docker (tùy chọn)
- Database (PostgreSQL/MongoDB - tuỳ chọn)

## 🛠️ Cài đặt & Khởi chạy

### 1. Clone repository
```bash
git clone https://github.com/your-username/nestjs-starter-kit.git
cd nestjs-starter-kit
```

### 2. Cài đặt dependencies
```bash
npm install
# hoặc
yarn install
```

### 3. Cấu hình environment
Tạo file `.env` từ mẫu:
```bash
cp .env.example .env
```
Sửa các biến môi trường theo nhu cầu (database, JWT, v.v.)

### 4. Chạy ứng dụng (development)
```bash
npm run start:dev
```

### 5. Truy cập API
```
http://localhost:3000/api
```

---

## ⚙️ Cấu trúc dự án

```
src/
├── common/             # Shared utilities & components
│   ├── decorators/
│   ├── filters/
│   ├── guards/
│   ├── interceptors/
│   ├── middlewares/
│   ├── pipes/
│   └── utils/
├── config/             # Configuration management
│   └── configuration.ts
├── modules/            # Feature modules
│   ├── auth/           # Authentication module
│   │   ├── dtos/
│   │   ├── entities/
│   │   ├── strategies/
│   │   ├── auth.controller.ts
│   │   ├── auth.module.ts
│   │   └── auth.service.ts
│   ├── users/          # Users management module
│   └── ...             
├── shared/             # Shared modules
│   └── database/       # Database module (TypeORM/Prisma)
├── app.controller.ts   # Root controller
├── app.module.ts       # Root module
├── app.service.ts      # Root service
└── main.ts             # Bootstrap file

test/                   # Test suites
docker-compose.yml      # Docker configuration
Dockerfile              # Production Dockerfile
.env.example            # Environment template
```

---

## 🧪 Testing

### Unit tests
```bash
npm run test
```

### E2E tests
```bash
npm run test:e2e
```

### Coverage report
```bash
npm run test:cov
```

---

## 🔑 Environment Variables

| Tên biến          | Mô tả                          | Giá trị mặc định       |
|-------------------|--------------------------------|------------------------|
| `DATABASE_HOST`   | Database host                  | `localhost`            |
| `DATABASE_PORT`   | Database port                  | `5432`                 |
| `DATABASE_USER`   | Database username              | `postgres`             |
| `JWT_SECRET`      | Secret key cho JWT             | `secret`               |
| `JWT_EXPIRES_IN`  | Thời hạn JWT (ví dụ: 1h, 7d)   | `1h`                   |
| `PORT`            | Port ứng dụng                  | `3000`                 |

---

## 🤝 Contributing

1. Fork repository
2. Create your feature branch (`git checkout -b feature/new-feature`)
3. Commit changes (`git commit -am 'Add some feature'`)
4. Push to branch (`git push origin feature/new-feature`)
5. Open a Pull Request

---

## 📜 License

MIT License

Copyright (c) 2025 dat-th23