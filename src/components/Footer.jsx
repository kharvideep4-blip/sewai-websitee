import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-[#1a0a0a] text-white/95 py-4 border-t-2 border-amber-500">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pb-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-1.5">
              <div className="bg-white rounded-full p-1 flex-shrink-0">
                <img src="/assets/images/sewai-logo.png" alt="SEWAI" className="h-12 w-12 object-contain" />
              </div>
              <span className="font-playfair text-xl font-bold text-amber-500">SEWAI</span>
            </div>
            <p className="text-[11px] text-white/90 leading-relaxed">
              <span className="text-amber-500 font-semibold">Sacred Enterprise</span> for Worship<br />
              <span className="text-amber-500 font-semibold">Administration</span> &amp; Integration
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-[10px] text-amber-500 uppercase tracking-wider mb-1.5">Quick Links</h4>
            <ul className="space-y-0.5 text-[10px] text-white/90">
              <li><Link to="/" className="hover:text-amber-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-amber-400 transition-colors">About Us</Link></li>
              <li><Link to="/features" className="hover:text-amber-400 transition-colors">Features</Link></li>
              <li><Link to="/knowledge-base" className="hover:text-amber-400 transition-colors">Knowledge Base</Link></li>
              <li><Link to="/media" className="hover:text-amber-400 transition-colors">Media</Link></li>
              <li><Link to="/contact" className="hover:text-amber-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-[10px] text-amber-500 uppercase tracking-wider mb-1.5">Legal</h4>
            <ul className="space-y-0.5 text-[10px] text-white/90">
              <li><a href="#" className="hover:text-amber-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Cookie Policy</a></li>
            </ul>
          </div>

          {/* Connect - Social Media Logos */}
          <div>
            <h4 className="font-semibold text-[10px] text-amber-500 uppercase tracking-wider mb-1.5">Connect</h4>
            <div className="flex gap-3 flex-wrap items-center">
              <a href="#" title="WhatsApp" target="_blank" rel="noopener noreferrer">
                <img src="/assets/images/social/whatsapp.png" alt="WhatsApp" className="h-8 w-auto" />
              </a>
              <a href="#" title="YouTube" target="_blank" rel="noopener noreferrer">
                <img src="/assets/images/social/youtube.png" alt="YouTube" className="h-8 w-auto" />
              </a>
              <a href="#" title="Facebook" target="_blank" rel="noopener noreferrer">
                <img src="/assets/images/social/facebook.png" alt="Facebook" className="h-8 w-auto" />
              </a>
              <a href="#" title="Twitter" target="_blank" rel="noopener noreferrer">
                <img src="/assets/images/social/twitter.png" alt="Twitter" className="h-8 w-auto" />
              </a>
            </div>
            <div className="flex gap-3 mt-1 text-[8px] text-white/70">
              <span>WhatsApp</span>
              <span>YouTube</span>
              <span>Facebook</span>
              <span>Twitter</span>
            </div>
          </div>
        </div>

        {/* Copyright - with Indian Flag + "Made in India" Text + Logo */}
        <div className="border-t border-white/20 pt-2 flex flex-col sm:flex-row items-center justify-between gap-2 text-[9px] text-white/80">
          {/* Left side - Copyright */}
          <span>&copy; 2026 SEWAI. All rights reserved.</span>
          
          {/* Right side - "Made in India" + Logo + Flag */}
          <span className="flex items-center gap-2.5">
            {/* "Made in India" Text */}
            <span className="text-white/80 font-medium tracking-wide text-[10px]">Made in India</span>
            <img
              src="/assets/images/made-in-india.jpg"
              alt="Made in India Logo"
              className="h-8 w-auto inline-block rounded-[2px] shadow-md border border-white/20"
            />
            
            {/* Indian Flag - Using Reliable CDN Image (This will work!) */}
            <img
              src="https://flagcdn.com/w40/in.png"
              alt="Indian Flag"
              className="h-6 w-auto inline-block rounded-[2px] shadow-md border border-white/20"
            />
            
            {/* "Made in India" Logo/Image (your downloaded JPG) */}
            
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer