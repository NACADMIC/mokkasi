/**
 * MOK'S BUTCHER - 상담 위젯 (카카오톡, 네이버톡톡, 전화, 인스타 등)
 * 채널 ID/URL은 config에서 변경하세요
 */
(function() {
  const CONFIG = {
    kakaoChannelId: 'mokkasi',
    phone: '1644-0000',
    kakaoUrl: 'https://pf.kakao.com/_mokkasi/chat',
    kakaoMobileUrl: 'kakao://pf.kakao.com/_mokkasi/chat',
    naverTalkUrl: 'https://talk.naver.com/ct/w6abc123',  // 네이버 톡톡 URL (실제 URL로 교체)
    instagramUrl: 'https://www.instagram.com/mokkasi_hanwoo/',  // 인스타그램 (실제 ID로 교체)
    bandUrl: 'https://band.us/band/12345678'  // 밴드 (선택, 실제 URL로 교체)
  };

  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

  function createWidget() {
    const html = `
      <div id="chat-widget" class="chat-widget">
        <button class="chat-widget-btn" id="chat-widget-toggle" aria-label="상담하기">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
          <span class="chat-widget-badge">1:1</span>
        </button>
        <div class="chat-widget-panel" id="chat-widget-panel">
          <div class="chat-widget-header">
            <h3>상담하기</h3>
            <button class="chat-widget-close" id="chat-widget-close">×</button>
          </div>
          <div class="chat-widget-body">
            <p class="chat-widget-desc">궁금한 점이 있으시면 편하게 연락주세요!</p>
            <a href="${isMobile ? CONFIG.kakaoMobileUrl : CONFIG.kakaoUrl}" target="_blank" class="chat-widget-option chat-kakao" rel="noopener">
              <span class="chat-widget-icon">💬</span>
              <div>
                <strong>카카오톡 1:1 상담</strong>
                <span>실시간 채팅 문의</span>
              </div>
              <span class="chat-widget-arrow">→</span>
            </a>
            <a href="${CONFIG.naverTalkUrl}" target="_blank" class="chat-widget-option chat-naver" rel="noopener">
              <span class="chat-widget-icon">💭</span>
              <div>
                <strong>네이버 톡톡</strong>
                <span>네이버에서 바로 문의</span>
              </div>
              <span class="chat-widget-arrow">→</span>
            </a>
            <a href="tel:${CONFIG.phone.replace(/-/g, '')}" class="chat-widget-option chat-phone">
              <span class="chat-widget-icon">📞</span>
              <div>
                <strong>전화 문의</strong>
                <span>${CONFIG.phone}</span>
              </div>
              <span class="chat-widget-arrow">→</span>
            </a>
            <a href="${CONFIG.instagramUrl}" target="_blank" class="chat-widget-option chat-insta" rel="noopener">
              <span class="chat-widget-icon">📷</span>
              <div>
                <strong>인스타그램 DM</strong>
                <span>DM으로 문의하기</span>
              </div>
              <span class="chat-widget-arrow">→</span>
            </a>
            <a href="inquiry.html" class="chat-widget-option chat-form">
              <span class="chat-widget-icon">✉️</span>
              <div>
                <strong>온라인 문의</strong>
                <span>폼으로 문의하기</span>
              </div>
              <span class="chat-widget-arrow">→</span>
            </a>
          </div>
        </div>
      </div>
    `;

    const div = document.createElement('div');
    div.innerHTML = html;
    document.body.appendChild(div.firstElementChild);

    const toggle = document.getElementById('chat-widget-toggle');
    const panel = document.getElementById('chat-widget-panel');
    const close = document.getElementById('chat-widget-close');

    toggle.addEventListener('click', () => {
      panel.classList.toggle('open');
    });
    close.addEventListener('click', () => {
      panel.classList.remove('open');
    });
    document.addEventListener('click', (e) => {
      if (panel.classList.contains('open') && !e.target.closest('.chat-widget')) {
        panel.classList.remove('open');
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createWidget);
  } else {
    createWidget();
  }
})();
