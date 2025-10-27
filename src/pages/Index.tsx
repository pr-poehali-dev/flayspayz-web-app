import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const slogans = [
  "FlaySpayZ — не факт, что долетим",
  "FlaySpayZ — летим, пока можно",
  "FlaySpayZ — живи быстро, летай быстрее",
  "FlaySpayZ — гарантия* возврата (*не распространяется на полёты)",
  "FlaySpayZ — вы летите, мы молимся",
  "FlaySpayZ — безопасность? А что это?",
  "FlaySpayZ — турбулентность входит в стоимость билета",
  "FlaySpayZ — пристегнитесь, будет весело",
  "FlaySpayZ — каждый полёт как последний",
  "FlaySpayZ — летаем низко, цены ещё ниже",
  "FlaySpayZ — пилот тоже первый раз тут",
  "FlaySpayZ — страховка в подарок!",
  "FlaySpayZ — доверьтесь судьбе",
];

const mockFlights = [
  { id: 1, from: "Москва", to: "Санкт-Петербург", date: "2025-10-28", time: "08:30", price: "3 500 ₽", seats: 5, duration: "1ч 30м" },
  { id: 2, from: "Москва", to: "Казань", date: "2025-10-28", time: "10:15", price: "4 200 ₽", seats: 12, duration: "1ч 45м" },
  { id: 3, from: "Санкт-Петербург", to: "Сочи", date: "2025-10-29", time: "14:00", price: "6 800 ₽", seats: 3, duration: "3ч 15м" },
  { id: 4, from: "Москва", to: "Екатеринбург", date: "2025-10-29", time: "06:45", price: "5 500 ₽", seats: 8, duration: "2ч 20м" },
  { id: 5, from: "Казань", to: "Москва", date: "2025-10-30", time: "18:30", price: "4 000 ₽", seats: 15, duration: "1ч 40м" },
];

const destinations = [
  { city: "Санкт-Петербург", description: "Культурная столица", image: "🏛️", routes: 45 },
  { city: "Сочи", description: "Курорт у моря", image: "🏖️", routes: 38 },
  { city: "Казань", description: "Столица Татарстана", image: "🕌", routes: 32 },
  { city: "Екатеринбург", description: "Город на Урале", image: "🏔️", routes: 28 },
  { city: "Владивосток", description: "Дальний Восток", image: "🌅", routes: 22 },
  { city: "Калининград", description: "Янтарный край", image: "🏰", routes: 19 },
];

const faqs = [
  { q: "Можно ли вернуть билет?", a: "Да, но только до взлёта. После взлёта — увы, поздно." },
  { q: "Что входит в багаж?", a: "Один рюкзак до 10 кг бесплатно. Остальное — по тарифам или на ваш страх и риск." },
  { q: "Есть ли питание на борту?", a: "Да! Вода, печенье и надежда на лучшее." },
  { q: "Что делать при турбулентности?", a: "Держаться крепче и не паниковать. Пилот тоже первый раз." },
  { q: "Можно ли лететь с животными?", a: "Да, если они не против. Мы спросим." },
];

const Index = () => {
  const [currentSlogan, setCurrentSlogan] = useState(0);
  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlogan((prev) => (prev + 1) % slogans.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-secondary text-secondary-foreground shadow-lg">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Icon name="Plane" size={32} className="text-primary" />
            <h1 className="text-2xl font-bold">FlaySpayZ</h1>
          </div>
          <nav className="hidden md:flex gap-6">
            <button onClick={() => setActiveTab('home')} className="hover:text-primary transition-colors">Главная</button>
            <button onClick={() => setActiveTab('schedule')} className="hover:text-primary transition-colors">Расписание</button>
            <button onClick={() => setActiveTab('bookings')} className="hover:text-primary transition-colors">Мои бронирования</button>
            <button onClick={() => setActiveTab('about')} className="hover:text-primary transition-colors">О компании</button>
            <button onClick={() => setActiveTab('destinations')} className="hover:text-primary transition-colors">Направления</button>
            <button onClick={() => setActiveTab('faq')} className="hover:text-primary transition-colors">FAQ</button>
            <button onClick={() => setActiveTab('contact')} className="hover:text-primary transition-colors">Контакты</button>
          </nav>
          <Button size="sm" className="md:hidden">
            <Icon name="Menu" size={20} />
          </Button>
        </div>
      </header>

      {activeTab === 'home' && (
        <>
          <section className="relative bg-gradient-to-br from-secondary via-primary/20 to-accent/10 text-white py-32 overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
            <div className="container mx-auto px-4 relative z-10 text-center">
              <div className="animate-fade-in">
                <h2 className="text-5xl md:text-7xl font-bold mb-6">FlaySpayZ</h2>
                <p className="text-xl md:text-3xl mb-8 h-16 flex items-center justify-center transition-all duration-500">
                  {slogans[currentSlogan]}
                </p>
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6">
                  <Icon name="Search" size={20} className="mr-2" />
                  Найти рейс
                </Button>
              </div>
            </div>
          </section>

          <section className="container mx-auto px-4 py-16 -mt-16 relative z-20">
            <Card className="p-8 shadow-2xl animate-slide-up">
              <h3 className="text-2xl font-bold mb-6">Поиск рейсов</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                <div>
                  <Label htmlFor="from">Откуда</Label>
                  <Select>
                    <SelectTrigger id="from">
                      <SelectValue placeholder="Город отправления" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="moscow">Москва</SelectItem>
                      <SelectItem value="spb">Санкт-Петербург</SelectItem>
                      <SelectItem value="kazan">Казань</SelectItem>
                      <SelectItem value="ekb">Екатеринбург</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="to">Куда</Label>
                  <Select>
                    <SelectTrigger id="to">
                      <SelectValue placeholder="Город прибытия" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="spb">Санкт-Петербург</SelectItem>
                      <SelectItem value="sochi">Сочи</SelectItem>
                      <SelectItem value="kazan">Казань</SelectItem>
                      <SelectItem value="vlad">Владивосток</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="date">Дата вылета</Label>
                  <Input id="date" type="date" defaultValue="2025-10-28" />
                </div>
                <div>
                  <Label htmlFor="passengers">Пассажиры</Label>
                  <Select defaultValue="1">
                    <SelectTrigger id="passengers">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 пассажир</SelectItem>
                      <SelectItem value="2">2 пассажира</SelectItem>
                      <SelectItem value="3">3 пассажира</SelectItem>
                      <SelectItem value="4">4+ пассажира</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <Button className="w-full" size="lg">
                <Icon name="Search" size={20} className="mr-2" />
                Найти рейсы
              </Button>
            </Card>
          </section>

          <section className="container mx-auto px-4 py-16">
            <h3 className="text-3xl font-bold mb-8 text-center">Доступные рейсы</h3>
            <div className="grid gap-4">
              {mockFlights.map((flight) => (
                <Card key={flight.id} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                    <div className="flex items-center gap-4 flex-1">
                      <div className="text-center">
                        <p className="text-2xl font-bold">{flight.time}</p>
                        <p className="text-sm text-muted-foreground">{flight.from}</p>
                      </div>
                      <div className="flex-1 flex flex-col items-center">
                        <Icon name="Plane" size={24} className="text-primary rotate-90" />
                        <p className="text-xs text-muted-foreground mt-1">{flight.duration}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold">—</p>
                        <p className="text-sm text-muted-foreground">{flight.to}</p>
                      </div>
                    </div>
                    <Separator orientation="vertical" className="hidden md:block h-16" />
                    <div className="flex items-center gap-4 md:gap-8">
                      <div>
                        <p className="text-sm text-muted-foreground">Мест осталось</p>
                        <Badge variant={flight.seats < 5 ? "destructive" : "secondary"}>{flight.seats}</Badge>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-primary">{flight.price}</p>
                        <Button size="sm" className="mt-2">
                          <Icon name="Ticket" size={16} className="mr-1" />
                          Забронировать
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          <section className="bg-muted py-16">
            <div className="container mx-auto px-4">
              <h3 className="text-3xl font-bold mb-8 text-center">Почему FlaySpayZ?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="p-6 text-center hover:scale-105 transition-transform">
                  <div className="text-5xl mb-4">💸</div>
                  <h4 className="text-xl font-bold mb-2">Низкие цены</h4>
                  <p className="text-muted-foreground">Экономим на всём, включая здравый смысл</p>
                </Card>
                <Card className="p-6 text-center hover:scale-105 transition-transform">
                  <div className="text-5xl mb-4">⚡</div>
                  <h4 className="text-xl font-bold mb-2">Быстро</h4>
                  <p className="text-muted-foreground">Вылетаем сразу, как только двигатель заведётся</p>
                </Card>
                <Card className="p-6 text-center hover:scale-105 transition-transform">
                  <div className="text-5xl mb-4">🎲</div>
                  <h4 className="text-xl font-bold mb-2">Авантюра</h4>
                  <p className="text-muted-foreground">Каждый полёт — это приключение</p>
                </Card>
              </div>
            </div>
          </section>
        </>
      )}

      {activeTab === 'schedule' && (
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-4xl font-bold mb-8">Расписание рейсов</h2>
          <Tabs defaultValue="today">
            <TabsList>
              <TabsTrigger value="today">Сегодня</TabsTrigger>
              <TabsTrigger value="tomorrow">Завтра</TabsTrigger>
              <TabsTrigger value="week">На неделю</TabsTrigger>
            </TabsList>
            <TabsContent value="today" className="mt-6">
              <div className="grid gap-4">
                {mockFlights.slice(0, 2).map((flight) => (
                  <Card key={flight.id} className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xl font-bold">{flight.from} → {flight.to}</p>
                        <p className="text-muted-foreground">{flight.time} • {flight.duration}</p>
                      </div>
                      <Badge>{flight.price}</Badge>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="tomorrow" className="mt-6">
              <div className="grid gap-4">
                {mockFlights.slice(2, 4).map((flight) => (
                  <Card key={flight.id} className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xl font-bold">{flight.from} → {flight.to}</p>
                        <p className="text-muted-foreground">{flight.time} • {flight.duration}</p>
                      </div>
                      <Badge>{flight.price}</Badge>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="week" className="mt-6">
              <p className="text-muted-foreground">Расписание на неделю загружается...</p>
            </TabsContent>
          </Tabs>
        </section>
      )}

      {activeTab === 'bookings' && (
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-4xl font-bold mb-8">Мои бронирования</h2>
          <Card className="p-8 text-center">
            <Icon name="TicketX" size={64} className="mx-auto text-muted-foreground mb-4" />
            <h3 className="text-xl font-bold mb-2">У вас пока нет бронирований</h3>
            <p className="text-muted-foreground mb-4">Найдите рейс и забронируйте билет!</p>
            <Button onClick={() => setActiveTab('home')}>
              <Icon name="Search" size={16} className="mr-2" />
              Найти рейс
            </Button>
          </Card>
        </section>
      )}

      {activeTab === 'about' && (
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-4xl font-bold mb-8">О компании FlaySpayZ</h2>
          <Card className="p-8">
            <div className="prose max-w-none">
              <p className="text-lg mb-4">
                FlaySpayZ — это революционная авиакомпания, которая не боится говорить правду. 
                Мы летаем туда, куда другие боятся. И делаем это с юмором.
              </p>
              <p className="text-lg mb-4">
                Основанная в 2024 году группой энтузиастов и одним пилотом с сомнительной лицензией, 
                FlaySpayZ быстро завоевала сердца тех, кто ценит честность и адреналин.
              </p>
              <p className="text-lg mb-6">
                Наш девиз: "Не факт, что долетим, но точно будет весело!"
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary">127</p>
                  <p className="text-muted-foreground">Рейсов в день</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary">23</p>
                  <p className="text-muted-foreground">Самолёта в парке</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary">89%</p>
                  <p className="text-muted-foreground">Довольных клиентов*</p>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-4">* Среди тех, кто долетел</p>
            </div>
          </Card>
        </section>
      )}

      {activeTab === 'destinations' && (
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-4xl font-bold mb-8">Популярные направления</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.map((dest) => (
              <Card key={dest.city} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="text-8xl text-center py-8 bg-gradient-to-br from-primary/10 to-accent/10">
                  {dest.image}
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{dest.city}</h3>
                  <p className="text-muted-foreground mb-4">{dest.description}</p>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary">{dest.routes} рейсов</Badge>
                    <Button size="sm" variant="outline">Подробнее</Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>
      )}

      {activeTab === 'faq' && (
        <section className="container mx-auto px-4 py-16 max-w-3xl">
          <h2 className="text-4xl font-bold mb-8">Частые вопросы</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      )}

      {activeTab === 'contact' && (
        <section className="container mx-auto px-4 py-16 max-w-2xl">
          <h2 className="text-4xl font-bold mb-8">Контакты</h2>
          <Card className="p-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Icon name="Phone" size={24} className="text-primary mt-1" />
                <div>
                  <p className="font-bold">Телефон горячей линии</p>
                  <p className="text-muted-foreground">8-800-FLY-SPAY (359-7729)</p>
                  <p className="text-sm text-muted-foreground">Работаем когда угодно, отвечаем когда получится</p>
                </div>
              </div>
              <Separator />
              <div className="flex items-start gap-4">
                <Icon name="Mail" size={24} className="text-primary mt-1" />
                <div>
                  <p className="font-bold">Email</p>
                  <p className="text-muted-foreground">info@flayspay.ru</p>
                  <p className="text-sm text-muted-foreground">Отвечаем в течение 3-5 рабочих недель</p>
                </div>
              </div>
              <Separator />
              <div className="flex items-start gap-4">
                <Icon name="MapPin" size={24} className="text-primary mt-1" />
                <div>
                  <p className="font-bold">Главный офис</p>
                  <p className="text-muted-foreground">г. Москва, ул. Взлётная, д. 13, офис 404</p>
                  <p className="text-sm text-muted-foreground">Рядом с аэропортом, если что — быстро свалим</p>
                </div>
              </div>
            </div>
          </Card>
        </section>
      )}

      <footer className="bg-secondary text-secondary-foreground py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                <Icon name="Plane" size={24} className="text-primary" />
                FlaySpayZ
              </h4>
              <p className="text-sm text-muted-foreground">Авиакомпания с характером</p>
            </div>
            <div>
              <h5 className="font-bold mb-4">Компания</h5>
              <ul className="space-y-2 text-sm">
                <li><button onClick={() => setActiveTab('about')} className="hover:text-primary transition-colors">О нас</button></li>
                <li><button onClick={() => setActiveTab('destinations')} className="hover:text-primary transition-colors">Направления</button></li>
                <li><a href="#" className="hover:text-primary transition-colors">Правила перевозки</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-4">Поддержка</h5>
              <ul className="space-y-2 text-sm">
                <li><button onClick={() => setActiveTab('faq')} className="hover:text-primary transition-colors">FAQ</button></li>
                <li><button onClick={() => setActiveTab('contact')} className="hover:text-primary transition-colors">Контакты</button></li>
                <li><a href="#" className="hover:text-primary transition-colors">Вернуть билет</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-4">Социальные сети</h5>
              <div className="flex gap-4">
                <Icon name="Facebook" size={20} className="hover:text-primary cursor-pointer transition-colors" />
                <Icon name="Twitter" size={20} className="hover:text-primary cursor-pointer transition-colors" />
                <Icon name="Instagram" size={20} className="hover:text-primary cursor-pointer transition-colors" />
              </div>
            </div>
          </div>
          <Separator className="my-8 bg-muted" />
          <p className="text-center text-sm text-muted-foreground">
            © 2024 FlaySpayZ. Все права защищены. Не факт, что долетим, но точно попробуем.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
