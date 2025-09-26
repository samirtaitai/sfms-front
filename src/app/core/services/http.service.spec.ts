// src/app/http.service.spec.ts
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { HttpService } from './http.service';
import { HttpClient } from '@angular/common/http';
import { of, throwError } from 'rxjs';

describe('HttpService', () => {
  let httpClientMock: { get: any; post: any; put: any; delete: any };
  let service: HttpService;

  beforeEach(() => {
    httpClientMock = {
      get: vi.fn(),
      post: vi.fn(),
      put: vi.fn(),
      delete: vi.fn()
    };

    service = new HttpService(httpClientMock as unknown as HttpClient);
  });

  it('debería hacer una petición GET correctamente', () => {
    const mockData = { name: 'Samir' };
    httpClientMock.get.mockReturnValue(of(mockData));

    service.get<any>('https://api.example.com/user').subscribe(data => {
      expect(data).toEqual(mockData);
    });

    expect(httpClientMock.get).toHaveBeenCalledWith('https://api.example.com/user');
  });

  it('debería manejar errores en GET', () => {
    const errorResponse = new Error('Ocurrió un error en la solicitud HTTP.');
    httpClientMock.get.mockReturnValue(throwError(() => errorResponse));

    service.get<any>('https://api.example.com/error').subscribe({
      next: () => expect(false).toBe(true), // No debería llegar aquí
      error: (error) => {
        expect(error.message).toBe('Ocurrió un error en la solicitud HTTP.');
      }
    });
  });

  // Puedes agregar tests similares para POST, PUT y DELETE
});