
export default function Footer() {
  return (
    <footer className="bg-bg-secondary py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight text-text">
              CALiu{/* <span className="text-primary">.</span> */}
            </span>
          </div>
          
          <p className="text-text-muted text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </p>


        </div>
      </div>
    </footer>
  );
}
