"use client"; 
import Lenis from "lenis"; // thư viện smooth scroll
import {
    createContext,
    useContext,
    useEffect,
    useRef,
    type ReactNode,
} from "react";

// Kiểu dữ liệu context: chỉ cung cấp hàm scroll lên top
type LenisScrollContextValue = {
    scrollToTop: () => void;
};

// Tạo context + fallback (nếu chưa có Lenis thì dùng native scroll)
const LenisScrollContext = createContext<LenisScrollContextValue>({
    scrollToTop: () => window.scrollTo({ top: 0 }),
});

// Custom hook để dùng context dễ hơn
export const useLenisScroll = () => useContext(LenisScrollContext);

// Provider bọc toàn app
export function SmoothScrollProvider({ children }: { children: ReactNode }) {
    const lenisRef = useRef<Lenis | null>(null); // lưu instance Lenis

    useEffect(() => {
        // Khởi tạo Lenis (engine scroll)
        const lenis = new Lenis({
            duration: 1.2, // thời gian scroll (giây) → càng lớn càng mượt
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easing: nhanh đầu, chậm cuối
            smoothWheel: true, // bật smooth khi lăn chuột
        });

        lenisRef.current = lenis; // lưu lại để dùng ở chỗ khác

        let rafId: number; // lưu id để cleanup

        // Loop animation (chạy ~60fps)
        const raf = (time: number) => {
            lenis.raf(time); // cập nhật vị trí scroll mỗi frame
            rafId = requestAnimationFrame(raf); // gọi lại chính nó → loop
        };

        rafId = requestAnimationFrame(raf); // bắt đầu loop

        // Cleanup khi component unmount
        return () => {
            cancelAnimationFrame(rafId); // dừng loop
            lenis.destroy(); // hủy instance
        };
    }, []);

    // Hàm scroll lên top (dùng Lenis → mượt)
    const scrollToTop = () => {
        lenisRef.current?.scrollTo(0); // 0 = top
    };

    // Cung cấp hàm scrollToTop cho toàn bộ app
    return (
        <LenisScrollContext.Provider value={{ scrollToTop }}>
            {children}
        </LenisScrollContext.Provider>
    );
}